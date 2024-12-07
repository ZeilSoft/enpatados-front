import usePagination from "@/enpatados/hooks/usePagination"
import { useEffect } from "react"
import { Pagination } from "./components/Pagination"
import SearchBar from "./components/SearchBar"
import { useQuery } from "@tanstack/react-query"
import Categories from "./components/Categories"
import { getCategories } from "@/enpatados/services/categoryService"
import { getProducts } from "@/enpatados/services/productService"
import CardsContainer from "./components/CardsContainer"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

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
      pageSize: 6,
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
    <main className="flex flex-col items-center w-full gap-8">
      <section className="flex flex-col items-center justify-center gap-8 w-full min-h-[200px] bg-gray-main">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl xl:text-7xl font-bold text-black-main leading-normal max-w-[900px]"
        >
          Nuestros productos
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-medium"
        >
          Descubre nuestro increíble catálogo de productos.
        </motion.p>
      </section>

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

      <section className="flex flex-col justify-center items-center bg-yellow-main p-8 gap-8 w-full min-h-[500px]">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-semibold text-black-main leading-normal max-w-[850px]"
        >
          Atrevete a comprar medias únicas
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-center"
        >
          La mejor forma de destacar empieza con nosotros.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-8"
        >
          <Link to="/auth/iniciar-sesion">
            <Button variant="blue" className="font-normal py-6 px-8 text-base">
              Iniciar sesión
            </Button>
          </Link>
          <Button variant="ghost" className="font-normal py-6 px-8 text-base">
            Contactanos
          </Button>
        </motion.div>
      </section>

    </main>
  )
}
