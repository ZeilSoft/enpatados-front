import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useModalHandlers } from "@/dashboardAdmin/hooks/useModalHandlers "
import { Order } from "@/enpatados/interfaces/Order"
import { Pencil, Trash2 } from "lucide-react"
interface OrdersTableProps {
  orders: Order[]
  refetch: Function
}
const OrdersTable = ({ orders, refetch }: OrdersTableProps) => {
  const { handleUpdateOrder, handleDeleteOrder } = useModalHandlers()

  return (
    <div>
      <div className="px-4 lg:px-6 max-w-[1920px] 4xl:w-[1920px] 4xl:mx-auto">
        <div className="flex flex-col gap-4 bg-[#252D3B] p-4 rounded-md border border-[#334155]">
          {/* <div className="flex flex-col sm:flex-row gap-3">
            <Input
              placeholder="Buscar orden"
              value={ordersSearchTerm}
              onChange={(e) => setUsersSearchTerm(e.target.value)}
              className="border border-[#334155] bg-[#252D3B] focus-visible:ring-2 focus:ring-white focus:outline-none text-white"
            />
          </div> */}

          {/* Borde externo de la tabla */}
          <div className="border border-[#334155] rounded-md bg-[#252D3B]">
            <Table className="rounded-md overflow-hidden border border-[#334155]">
              <TableHeader>
                <TableRow>
                  <TableHead className="border border-[#334155]">
                    Numero de orden
                  </TableHead>
                  <TableHead className="border border-[#334155]">
                    Total
                  </TableHead>
                  <TableHead className="border border-[#334155]">
                    Descuento
                  </TableHead>
                  <TableHead className="border border-[#334155]">Rol</TableHead>
                  <TableHead className="border border-[#334155] lg:text-center">
                    Estado
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <TableRow key={crypto.randomUUID()} className="hover:">
                      <TableCell className="border border-[#334155]">
                        {order.order_number}
                      </TableCell>
                      <TableCell className="border border-[#334155]">
                        $ {order.total}
                      </TableCell>
                      <TableCell className="border border-[#334155]">
                        $ {order.discount}
                      </TableCell>
                      <TableCell className="border border-[#334155]">
                        {order.status}
                      </TableCell>
                      <TableCell className="border border-[#334155]">
                        <div className="flex flex-row gap-4 justify-center">
                          <Trash2
                            className="cursor-pointer"
                            onClick={() => handleDeleteOrder(order.order_id, refetch)}
                          />
                          <Pencil
                            className="cursor-pointer"
                            onClick={() => handleUpdateOrder(order, refetch)}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center text-[#F15656]"
                    >
                      No se encontraron usuarios.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default OrdersTable
