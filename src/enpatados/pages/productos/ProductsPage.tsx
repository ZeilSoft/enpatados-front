import usePagination from "@/enpatados/hooks/usePagination"
import { useEffect, useState } from "react"
import { Pagination } from "./components/Pagination"
import SearchBar from "./components/SearchBar"
import { useQuery } from "@tanstack/react-query"
import Categories from "./components/Categories"
import SubCategories from "./components/SubCategories"
import { getCategories } from "@/enpatados/services/categoryService"
import { getSubCategories } from "@/enpatados/services/subCategoryService"
import { getProducts } from "@/enpatados/services/productService"
import CardsContainer from "./components/CardsContainer"

export const ProductsPage = () => {
  /*   const [product, setProduct] = useState([]) */
  const { searchParams, handlePageChange, setTotalPages, totalPages } =
    usePagination()
  const currentPage = Number(searchParams.get("currentPage"))
  const search = searchParams.get("search")
  const categoryId = searchParams.get("categoryId")
  const subCategoryId = searchParams.get("subcategoryId")

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  })

  const { data: subCategories } = useQuery({
    queryKey: ["sub-categories"],
    queryFn: getSubCategories,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  })

  const { data: products, refetch: refetchProducts } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsFunction,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  })
  async function getProductsFunction() {
    const response = await getProducts({
      page: currentPage ? currentPage : 1,
      pageSize: 1,
      categoryId: categoryId ? categoryId : undefined,
      subCategoryId: subCategoryId ? subCategoryId : undefined,
      search: search ? search : undefined,
    })
    setTotalPages(response.data.pagination.totalPages)
    return response.data.data
  }

  useEffect(() => {
    console.log(searchParams.get("currentPage"))
    refetchProducts()
  }, [currentPage, search, categoryId, subCategoryId, totalPages])

  return (
    <main className="flex flex-col items-center p-2 w-full min-h-screen gap-12">
      <section>
        <SearchBar />
      </section>
      <section className="flex">
        <div className="flex flex-col">
          <Categories />
        </div>
        <div className="flex flex-col">
          <div>
            <SubCategories subCategories={subCategories} />
          </div>
          <CardsContainer products={products} />
        </div>
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
