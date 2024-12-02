import { useState, useCallback } from "react"
import { useSearchParams } from "react-router-dom"

const usePagination = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState<number | undefined>(undefined)
  const [totalPages, setTotalPages] = useState(1)
  const urlParams = new URLSearchParams(window.location.search)

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
    updateUrl(page)
  }, [])

  const handleSearch = useCallback((search: string, page?: number) => {
    updateSearchUrl(search, page ? page : 1)
  }, [])

  const handleCategory = useCallback((category: string) => {
    generalUpdateUrl(category, 1)
  }, [])

  const handleSubCategory = useCallback((subCategory: string) => {
    generalUpdateUrl(undefined, 1, undefined, subCategory)
  }, [])

  const generalUpdateUrl = useCallback(
    (
      category?: string,
      page?: number,
      search?: string,
      subCategory?: string
    ) => {
      setSearchParams({
        currentPage: page ? page.toString() : "1",
        search: search ? search : "",
        category: category ? category : "",
        subcategory: subCategory ? subCategory : "",
      })
    },
    []
  )

  const updateSearchUrl = useCallback(
    (search: string, page: number) => {
      /*       const categoryId = urlParams.get("categories") */
      setSearchParams({
        currentPage: page.toString(),
        search: search,
        /*         category: categoryId || "", */
      })
    },
    [setSearchParams]
  )

  const updateUrl = useCallback(
    (page: number) => {
      const search = urlParams.get("search")
      /*       const categoriesParams = urlParams.get("categories") */
      setSearchParams({
        currentPage: page.toString(),
        search: search ? search : "",
        /*         category: categoriesParams ? categoriesParams : "", */
      })
    },
    [setSearchParams]
  )

  const sincronizeParams = useCallback(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const search = urlParams.get("search") || ""
    const current = urlParams.get("currentPage") || ""
    /*     const categoryId = urlParams.get("category") */
    setSearchParams({
      currentPage: current,
      search: search,
      /*       category: categoryId || "", */
    })
  }, [])

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
    sincronizeParams,
    setCurrentPage,
    setSearchParams,
    handleCategory,
    handleSubCategory,
  }
}

export default usePagination
