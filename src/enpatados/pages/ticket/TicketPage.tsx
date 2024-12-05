import { useAuthContext } from "@/auth/context/auth-context"
import { Button } from "@/components/ui/button"
import { CartProducts, useCartStore } from "@/store/cart.store"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom"

function getMessage(products: CartProducts[], total: number) {
  let message = ""

  products.forEach((product) => {
    message += `${product.amount} ${product.product.name} x ${
      product.product.price
    }, total: ${product.amount * product.product.price}  %0A%0A`
  })

  const messageWhatsapp = `Buenos dias, queria hacer el siguiente pedido: %0A%0A
${message}Total: ${total}

  %0A%0AMuchas gracias!`
  return messageWhatsapp
}
const phone = import.meta.env.VITE_PHONE_NUMBER

const TicketPage = () => {
  const { authUser } = useAuthContext()

  const products = useCartStore(
    (state) =>
      state.cart.find((product) => product.userId === authUser?.user.id)
        ?.products || []
  )
  let total: number = 0

  products.forEach((product: CartProducts) => {
    total += product.amount * product.product.price
  })
  function handleSubmit() {
    const message = getMessage(products, total)
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
  }
  return (
    <main className="flex items-center justify-center w-full min-h-screen">
      <section className="flex flex-col w-full max-w-[800px] rounded-none md:rounded-lg shadow p-6 sm:p-8 bg-yellow-50 gap-4">
        {authUser === null ? (
          <div className="flex flex-col gap-4 items-center justify-center">
            <span>
              Debe estar registrado en la pagina para poder hacer compras
            </span> 
            <Link to="/auth/iniciar-sesion">
              <Button variant="green">Iniciar sesion</Button>
            </Link>
          </div>
        ) : (
          <>
            {products.map((product: CartProducts) => (
              <TicketCard ticket={product} key={crypto.randomUUID()} />
            ))}
            <span>{total}</span>
            <Button
              variant="green"
              className="flex gap-2"
              onClick={handleSubmit}
            >
              <Icon icon="ic:baseline-whatsapp" width={24} height={24} />
              Enviar a WhatsApp
            </Button>
          </>
        )}
      </section>
    </main>
  )
}
export default TicketPage

interface TicketCardProps {
  ticket: CartProducts
}

function TicketCard({ ticket }: TicketCardProps) {
  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex w-full gap-2">
        <div
          className={`rounded-lg bg-[url("/spiderman.jpg")] bg-cover bg-center min-w-20 min-h-20`}
        />
        <div className="flex flex-col md:flex-row w-full items-center gap-2 md:gap-0">
          <div className="flex flex-col md:w-full">
            <span className="font-medium truncate max-w-[170px]">
              {ticket.product.name}
            </span>
            <span className="font-light truncate max-w-[170px]">
              $ {ticket.product.price} / unidad
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
