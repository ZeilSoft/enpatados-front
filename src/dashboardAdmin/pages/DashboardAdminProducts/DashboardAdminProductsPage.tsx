import { Modal } from "@/components/shared/Modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useModalStore } from "@/store/ui.store"
import { useModalHandlers } from "../../hooks/useModalHandlers "
import { useQuery } from "@tanstack/react-query"
import { getProducts } from "@/enpatados/services/productService"
import usePaginationProducts from "@/dashboardAdmin/hooks/usePaginationProducts"
import { useEffect, useState } from "react"
import { Product } from "@/enpatados/interfaces/Product"
import { getCategories } from "@/enpatados/services/categoryService"
import { Category } from "@/enpatados/interfaces/Category"
import { SubCategory } from "@/enpatados/interfaces/SubCategory"
import { PaginationProducts } from "@/dashboardAdmin/components/paginationProducts"
import { useDebounce } from "use-debounce"

export const DashboardAdminProductsPage = () => {
  const { modalContent, modalTitle } = useModalStore()
  const { handleCreateProduct, handleEditProduct, handleDeleteProduct } =
    useModalHandlers()
  const {
    searchParams,
    setTotalPages,
    totalPages,
    handlePageChange,
    handleCategory,
    handleSubCategory,
    handleSearch,
  } = usePaginationProducts()
  const currentPage = Number(searchParams.get("currentPage")) || 1
  const search = searchParams.get("search")
  const categoryId = searchParams.get("category")
  const subCategoryId = searchParams.get("subcategory")

  const [text, setText] = useState<string>(search?.toString() || "")
  const [value] = useDebounce(text, 350)

  useEffect(() => {
    const currentPageParams = Number(searchParams.get("currentPage"))
    if (search === text) {
      return
    }
    handleSearch(value, currentPageParams)
  }, [value])

  const [category, setCategory] = useState<number | undefined>(
    categoryId ? Number(categoryId) : undefined
  )

  const { data: categories, isPending: isPendingCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  })

  const {
    data: products,
    refetch: refetchProducts,
    error: errorProducts,
    isPending: isPendingProducts,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsFunction,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
    retry: 0,
  })

  async function getProductsFunction() {
    const response = await getProducts({
      page: currentPage ? currentPage : 1,
      pageSize: 6,
      categoryId: categoryId ? categoryId : "",
      subCategoryId: subCategoryId ? subCategoryId : "",
      search: search ? search : "",
    })
    setTotalPages(response.data.totalPages)
    return response.data.products
  }

  useEffect(() => {
    refetchProducts()
  }, [currentPage, search, categoryId, subCategoryId, totalPages])

  function handleChangeSelectCategory(value: string) {
    if (value === "todas") {
      handleSubCategory(0, undefined)
      handleCategory(0)
      return setCategory(undefined)
    }
    handleCategory(Number(value))
    setCategory(Number(value))
  }

  function handleChangeSelectSubCategory(value: string) {
    if (value === "todas") {
      handleSubCategory(0, category)
      return
    }
    handleSubCategory(Number(value), category)
  }

  return (
    <div className="flex flex-col gap-6 text-white">
      {/* Header */}
      <div className="sticky top-0 p-4 lg:px-6 lg:py-6 flex flex-col border-b border-[#334155] gap-6 z-[7777] bg-[#252D3B] shadow">
        <h1 className="text-4xl font-bold text-center w-auto">PRODUCTOS</h1>

        {/* Searchbar, categories, create */}
        <div className="flex flex-col sm:flex-row gap-3 mx-auto">
          <Input
            type="text"
            placeholder="Buscar producto"
            className="border border-[#334155] bg-[#252D3B] focus-visible:ring-2 focus:ring-white focus:outline-none"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />

          {isPendingCategories ? (
            "Cargando..."
          ) : (
            <>
              <Select
                defaultValue={category ? category.toString() : "todas"}
                onValueChange={handleChangeSelectCategory}
              >
                <SelectTrigger className="border border-[#334155] bg-[#252D3B] rounded-md py-2 px-4 focus:ring-offset-0 focus-visible:ring-2 focus:ring-white">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent className="bg-[#252D3B] text-white z-[9999]">
                  <SelectItem value="todas">Todas</SelectItem>

                  {categories?.map((category: Category) => (
                    <SelectItem
                      key={crypto.randomUUID()}
                      value={category.category_id.toString()}
                    >
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {category != undefined && category >= 0 && (
                <Select
                  defaultValue={subCategoryId ? subCategoryId : "todas"}
                  onValueChange={handleChangeSelectSubCategory}
                >
                  <SelectTrigger className="border border-[#334155] bg-[#252D3B] rounded-md py-2 px-4 focus:ring-offset-0 focus-visible:ring-2 focus:ring-white">
                    <SelectValue placeholder="Subcategoría" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#252D3B] text-white z-[9999]">
                    <SelectItem value="todas">Todas</SelectItem>
                    {categories[category - 1]?.subcategories.map(
                      (subcategory: SubCategory) => (
                        <SelectItem
                          value={subcategory.subcategory_id.toString()}
                          key={crypto.randomUUID()}
                        >
                          {subcategory.name}
                        </SelectItem>
                      )
                    )}
                  </SelectContent>
                </Select>
              )}
            </>
          )}

          <Button
            variant="productActions"
            onClick={() => handleCreateProduct(refetchProducts)}
          >
            CREAR PRODUCTO
          </Button>
        </div>
      </div>

      {/* Grid */}
      <div className="px-4 lg:px-6 pb-4 lg:pb-6 max-w-[1920px] 4xl:w-[1920px] 4xl:mx-auto">
        {isPendingProducts ? (
          "Cargando...."
        ) : (
          <>
            {errorProducts ? (
              "No se encontraron productos"
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                {products.map((product: Product) => (
                  <div
                    key={crypto.randomUUID()}
                    className="bg-[#252D3B] shadow-lg rounded-lg flex flex-col"
                  >
                    <img
                      src={product.images[0].url}
                      alt={product.name}
                      className="h-60 w-full object-cover rounded-t-lg"
                    />

                    <div className="px-6 py-4 text-sm flex-1">
                      <h3 className="font-semibold text-lg mb-2">
                        {product.name}
                      </h3>
                      <p>
                        Precio:{" "}
                        <span className="font-bold text-green-600">
                          {product.price}
                        </span>
                      </p>
                      <p>
                        Categoría:{" "}
                        <span className="font-medium">
                          {product.category.name}
                        </span>
                      </p>
                      {product.subcategory && (
                        <p>
                          Subcategoría:{" "}
                          <span className="font-medium">
                            {product.subcategory.name}
                          </span>
                        </p>
                      )}
                      <p>
                        Stock:{" "}
                        <span
                          className={`font-medium ${
                            product.stock > 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {product.stock}
                        </span>
                      </p>
                    </div>

                    <div className="flex gap-2 p-4 border-t border-[#334155]">
                      <Button
                        className="flex-1"
                        variant="productActions"
                        onClick={() =>
                          handleEditProduct(product, refetchProducts)
                        }
                      >
                        EDITAR
                      </Button>
                      <Button
                        className="flex-1"
                        variant="delete"
                        onClick={() =>
                          handleDeleteProduct(
                            product.product_id,
                            product.name,
                            refetchProducts
                          )
                        }
                      >
                        ELIMINAR
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <section className="flex items-center justify-center w-full">
        <PaginationProducts
          currentPage={currentPage!}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          disabled={isPendingProducts}
          key={currentPage}
        />
      </section>

      {/* Renderiza el Modal con contenido dinámico */}
      <Modal className="bg-[#252D3B] p-2" title={modalTitle}>
        {modalContent}
      </Modal>
    </div>
  )
}
