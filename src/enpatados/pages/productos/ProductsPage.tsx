import usePagination from "@/enpatados/hooks/usePagination"
import { useEffect } from "react"
import { Pagination } from "./components/Pagination"
import SearchBar from "./components/SearchBar"
import { useQuery } from "@tanstack/react-query"
import Categories from "./components/Categories"
import { getCategories } from "@/enpatados/services/categoryService"
import { getProducts } from "@/enpatados/services/productService"
import CardsContainer from "./components/CardsContainer"

export const ProductsPage = () => {
  const { searchParams, handlePageChange, setTotalPages, totalPages } =
    usePagination()
  const currentPage = Number(searchParams.get("currentPage"))
  const search = searchParams.get("search")
  const categoryId = searchParams.get("category")
  const subCategoryId = searchParams.get("subcategory")

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  })

  const {
    data: products,
    refetch: refetchProducts,
    error: errorProducts,
    isLoading: isLoadingProducts,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsFunction,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  })
  console.log(products)

  async function getProductsFunction() {
    const response = await getProducts({
      page: currentPage ? currentPage : 1,
      pageSize: undefined,
      categoryId: categoryId ? categoryId : "",
      subCategoryId: subCategoryId ? subCategoryId : "",
      search: search ? search : "",
    })
    setTotalPages(response.data.pagination.totalPages)
    return response.data.data
  }

  useEffect(() => {
    refetchProducts()
  }, [currentPage, search, categoryId, subCategoryId, totalPages])

  return (
    <main className="flex flex-col items-center p-2 w-full min-h-screen gap-12">
      <section className="w-full">
        <SearchBar />
      </section>
      <section className="flex flex-col gap-4 w-full md:w-[80%]">
        <Categories categories={categories} />
        {isLoadingProducts ? (
          <p>cargando</p>
        ) : (
          <div>
            {errorProducts ? (
              <p>Algo ha salido mal, pruebe de nuevo</p>
            ) : (
              <CardsContainer products={products} />
            )}
          </div>
        )}
      </section>
      <Pagination
        currentPage={currentPage!}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        disabled={false}
        key={currentPage}
      />
    </main>
  )
}
