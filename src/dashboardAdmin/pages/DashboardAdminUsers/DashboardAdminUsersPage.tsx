import { useModalStore } from "@/store/ui.store"

import { Modal } from "@/components/shared/Modal"
import { UsersTable } from "./components/UsersTable"
import { useQuery } from "@tanstack/react-query"
import { getUsers } from "@/dashboardAdmin/services/userService"
import { usePaginationUsers } from "@/dashboardAdmin/hooks/usePaginationUsers"
import { PaginationUsers } from "@/dashboardAdmin/components/PaginationUsers"
import { User } from "@/dashboardAdmin/interfaces/User"
import { useEffect, useState } from "react"

export const DashboardAdminUsersPage = () => {
  const { modalContent, modalTitle } = useModalStore()
  const [users, setUsers] = useState<User[]>([])
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
    queryFn: getUsers,
  })
  useEffect(() => {
    getInitialPage()
    setUsers(user?.data.users)
    setTotalPages(user?.data.totalPages)
  }, [user])
  console.log(users)

  return (
    <div className="flex flex-col gap-6 text-white pb-4 lg:pb-6">
      {/* Header */}
      <div className="sticky top-0 p-4 lg:px-6 lg:py-6 flex flex-col border-b border-[#334155] gap-6 z-[7777] bg-[#252D3B] shadow">
        <h1 className="text-4xl font-bold text-center break-words">USUARIOS</h1>
      </div>
      {users ? <UsersTable users={users} refetch={refetch} /> : "No se encontraron usuarios"}

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
