import { useState, useCallback } from "react"
import { useSearchParams } from "react-router-dom"

const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState<number | undefined>(undefined)
  const [totalPages, setTotalPages] = useState(1)

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
    generalUpdateUrl(
      Number(searchParams.get("category")),
      page,
      searchParams.get("search") || "",
      Number(searchParams.get("subcategory"))
    )
  }, [])

  const handleSearch = useCallback((search: string, page?: number) => {
    generalUpdateUrl(
      Number(searchParams.get("category")),
      page ? page : 1,
      search || "",
      Number(searchParams.get("subcategory"))
    )
  }, [])

  const handleCategory = useCallback((category: number) => {
    generalUpdateUrl(category, 1, searchParams.get("search") || "", undefined)
  }, [])

  const handleSubCategory = useCallback(
    (subCategory: number, category?: number) => {
      generalUpdateUrl(
        category ? category : undefined,
        1,
        searchParams.get("search") || "",
        subCategory
      )
    },
    []
  )

  const generalUpdateUrl = useCallback(
    (
      category?: number,
      page?: number,
      search?: string,
      subCategory?: number
    ) => {
      setSearchParams({
        currentPage: page ? page.toString() : "1",
        search: search ? search : "",
        category: category ? category.toString() : "",
        subcategory: subCategory ? subCategory.toString() : "",
      })
    },
    []
  )

  const getInitialPage = useCallback(() => {
    const pageFromUrl = Number(searchParams.get("currentPage")) || 1
    setCurrentPage(pageFromUrl)
    return pageFromUrl
  }, [searchParams])

  return {
    currentPage,
    totalPages,
    setTotalPages,
    handlePageChange,
    getInitialPage,
    handleSearch,
    searchParams,
    setCurrentPage,
    setSearchParams,
    handleCategory,
    handleSubCategory,
  }
}

export default usePagination
