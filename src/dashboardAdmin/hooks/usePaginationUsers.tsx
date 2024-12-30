import { useState, useCallback } from "react"
import { useSearchParams } from "react-router-dom"

export const usePaginationUsers = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState<number | undefined>(undefined)
  const [totalPages, setTotalPages] = useState(1)

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page)
    generalUpdateUrl(page)
  }, [])

  const generalUpdateUrl = useCallback((page?: number) => {
    setSearchParams({
      currentPage: page ? page.toString() : "1",
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
    searchParams,
    setCurrentPage,
    setSearchParams,
  }
}


