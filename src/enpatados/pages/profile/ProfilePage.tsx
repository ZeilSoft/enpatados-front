import { Order } from "@/enpatados/interfaces/order"
import OrderCard from "./components/OrderCard"

const ProfilePage = () => {
  const order1: Order = {
    orderNumber: 1,
    date: new Date(),
    total: 100,
    status: "pendiente",
    userId: 1,
    discount: 400,
  }
  const order2: Order = {
    orderNumber: 2,
    date: new Date(),
    total: 100,
    status: "pagado",
    userId: 1,
  }
  const order3: Order = {
    orderNumber: 3,
    date: new Date(),
    total: 100,
    status: "cancelado",
    userId: 1,
    discount: 200,
  }
  return (
    <section className="flex flex-col gap-8 w-full p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-medium text-orange-main">Mi perfil</h1>
        <p>
          En esta seccion podras ver tus pedidos y en que estado se encuentran.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center">
        <OrderCard order={order1} />
        <OrderCard order={order2} />
        <OrderCard order={order3} />
        <OrderCard order={order2} />
        <OrderCard order={order1} />
      </div>
    </section>
  )
}
export default ProfilePage
