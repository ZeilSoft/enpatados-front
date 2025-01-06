import { useModalStore } from "@/store/ui.store"

import { Modal } from "@/components/shared/Modal"
import { UsersTable } from "./components/UsersTable"
import { useQuery } from "@tanstack/react-query"
import { getUsers } from "@/dashboardAdmin/services/userService"
import { usePaginationUsers } from "@/dashboardAdmin/hooks/usePaginationUsers"
import { PaginationUsers } from "@/dashboardAdmin/components/PaginationUsers"
import { useEffect } from "react"

export const DashboardAdminUsersPage = () => {
  const { modalContent, modalTitle } = useModalStore()
  const {
    setTotalPages,
    totalPages,
    handlePageChange,
    currentPage,
    getInitialPage,
  } = usePaginationUsers()

  const {
    data: user,
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsersFunction,
  })
  async function getUsersFunction() {
    const response = await getUsers(currentPage)
    setTotalPages(response?.data.totalPages)
    return response.data.users
  }
  useEffect(() => {
    getInitialPage()
  }, [])

  useEffect(() => {
    refetch()
  }, [currentPage, totalPages])

  return (
    <div className="flex flex-col gap-6 text-white pb-4 lg:pb-6">
      {/* Header */}
      <div className="sticky top-0 p-4 lg:px-6 lg:py-6 flex flex-col border-b border-[#334155] gap-6 z-[7777] bg-[#252D3B] shadow">
        <h1 className="text-4xl font-bold text-center break-words">USUARIOS</h1>
      </div>
      {user ? (
        <UsersTable users={user} refetch={refetch} />
      ) : (
        "No se encontraron usuarios"
      )}

      <section className="flex items-center justify-center w-full">
        <PaginationUsers
          currentPage={currentPage!}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          disabled={isPending}
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
