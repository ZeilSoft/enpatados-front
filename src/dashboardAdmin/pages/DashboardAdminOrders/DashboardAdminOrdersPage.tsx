import { Modal } from "@/components/shared/Modal"
import { getOrders } from "@/dashboardAdmin/services/orderService"
import { useModalStore } from "@/store/ui.store"
import { useQuery } from "@tanstack/react-query"
import OrdersTable from "./components/OrdersTable"
import usePaginationOrders from "@/dashboardAdmin/hooks/usePaginationOrders"
import { PaginationOrders } from "@/dashboardAdmin/components/paginationOrders"
import { useEffect } from "react"

export const DashboardAdminOrdersPage = () => {
  const { modalContent, modalTitle } = useModalStore()
  const {
    setTotalPages,
    totalPages,
    handlePageChange,
    currentPage,
    getInitialPage,
  } = usePaginationOrders()
  const {
    data: orders,
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  })
  useEffect(() => {
    getInitialPage()
    setTotalPages(orders?.data.totalPages)
  }, [orders])

  return (
    <div className="flex flex-col gap-6 text-white pb-4 lg:pb-6">
      {/* Header */}
      <div className="sticky top-0 p-4 lg:px-6 lg:py-6 flex flex-col border-b border-[#334155] gap-6 z-[7777] bg-[#252D3B] shadow">
        <h1 className="text-4xl font-bold text-center break-words">ORDENES</h1>
      </div>

      {orders ? <OrdersTable orders={orders.data.orders} refetch={refetch} /> : "No se encontraron ordenes"}

      <section className="flex items-center justify-center w-full">
        <PaginationOrders
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
