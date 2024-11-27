import { Order } from "@/enpatados/interfaces/order"
import { Icon } from "@iconify/react/dist/iconify.js"

interface OrderCardProps {
  order: Order
}
const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <div className="flex flex-col gap-8 p-2 bg-white rounded-lg max-w-60 w-full min-h-32 h-full">
      <div className="flex">
        <span className="flex items-center gap-2 w-full text-sm  md:text-base ">
          <Icon icon="streamline:ticket-1" className="size-5 md:size-7" />
          {order.orderNumber}
        </span>
        <span className="flex items-center justify-end gap-2 w-full text-sm md:text-base ">
          <Icon
            icon="material-symbols:calendar-month"
            className="size-5 md:size-7"
          />
          {order.date.getFullYear()}/{order.date.getMonth() + 1}/
          {order.date.getDate()}
        </span>
      </div>
      <div className="flex flex-col gap-1 h-full justify-end">
        {order.discount && (
          <span className="text-sm text-center">
            Descuento de ${order.discount}
          </span>
        )}
        <div className="flex">
          <span className="flex items-center text-sm  md:text-base ">
            <Icon icon="rivet-icons:money" className="size-5 md:size-6" />
            {order.total}
          </span>

          <span
            className={`flex items-center justify-end gap-2 w-full uppercase text-sm md:text-base ${
              order.status === "pendiente"
                ? "text-yellow-500"
                : order.status === "cancelado"
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {order.status}
          </span>
        </div>
      </div>
    </div>
  )
}
export default OrderCard
