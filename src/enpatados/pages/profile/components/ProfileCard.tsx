import { Order } from "@/enpatados/interfaces/Order"
import { motion } from "framer-motion"
interface ProfileCardProps {
  order: Order
}
const ProfileCard = ({ order }: ProfileCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-row items-center justify-center gap-1 sm:gap-4 w-full max-w-[500px] bg-white shadow-lg rounded-md shadow-gray-300 px-2 min-h-[170px]"
    >
      <img
        src={order.products[0].images[0].url} 
        alt="Imagen del primer producto"
        className="w-24 h-28 rounded-md object-center"
      />
      <div className="flex flex-col gap-1 text-start w-full">
        <div className="flex">
          <span className="font-semibold w-full">
            Orden numero: {order.order_number}
          </span>
          <span
          className={`font-bold text-start sm:text-end ${
            order.status === "paid"
              ? "text-[#276827]"
              : order.status === "pending"
              ? "text-[#bf9000]"
              : "text-[#6e0202]"
          }`}
        >
          {order.status}
        </span>
        </div>
        <span className="flex gap-2">
          Dia de la orden:{" "}
          <p className="font-bold">
            {new Date(order.createdAt).getFullYear()}/
            {new Date(order.createdAt).getMonth()}/
            {new Date(order.createdAt).getDate()}
          </p>
        </span>
        <p className="line-clamp-3 w-60">Total: $ {order.total}</p>
        {order.discount != 0 && (
          <p className="line-clamp-3 w-60">Descuento: $ {order.discount}</p>
        )}

        
      </div>
    </motion.div>
  )
}
export default ProfileCard
