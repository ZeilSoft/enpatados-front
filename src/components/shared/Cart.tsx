import { Product } from "@/enpatados/interfaces/Product"
import { Button } from "../ui/button"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useAuthContext } from "@/auth/context/auth-context"
import { CartProducts, useCartStore } from "@/store/cart.store"

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

interface CartProps {
  cartOpen: boolean
  setCartOpen: Function
}
export default function Cart({ cartOpen, setCartOpen }: CartProps) {
  const { authUser } = useAuthContext()

  const products = useCartStore(
    (state) =>
      state.cart.find((product) => product.userId === authUser?.user.id)
        ?.products || []
  )

  const increaseAmountProduct = useCartStore(
    (state) => state.increaseAmountProduct
  )
  const decreaseAmountProduct = useCartStore(
    (state) => state.decreaseAmountProduct
  )

  let subtotal: number = 0

  products.forEach((product: CartProducts) => {
    subtotal += product.amount * product.product.price
  })

  function handleSubmit() {
    const message = getMessage(products, subtotal)
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank")
  }

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-start z-50 transition-all duration-300 ${
        cartOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setCartOpen(false)}
    >
      <div
        className={`bg-white w-[320px] md:w-[400px] h-full p-2 flex flex-col gap-6 transition-all duration-300 absolute ${
          cartOpen ? "-right-0" : "-right-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row items-center justify-between">
          <button
            type="button"
            className="self-start"
            onClick={() => setCartOpen(false)}
          >
            <Icon
              className="text-light"
              icon="material-symbols:close"
              width="24"
              height="24"
            />
          </button>
        </div>

        <ol className="flex flex-col gap-4 overflow-y-auto h-[500px]">
          {products &&
            products.map((product: CartProducts) => (
              <CartCard
                key={crypto.randomUUID()}
                amount={product.amount}
                product={product.product}
                userId={Number(authUser!.user.id)}
                decreaseAmountProduct={decreaseAmountProduct}
                increaseAmountProduct={increaseAmountProduct}
              />
            ))}
        </ol>
        <div className="flex flex-col w-full gap-8">
          <div className="flex">
            <span className="w-full">Subtotal: </span>
            <span className="w-full text-end">$ {subtotal}</span>
          </div>

          <Button
            variant="blue"
            className="flex gap-2 w-full"
            onClick={handleSubmit}
          >
            <Icon
              icon="material-symbols:shopping-cart"
              width="24"
              height="24"
            />
            Enviar pedido a Whatsapp
          </Button>
        </div>
      </div>
    </div>
  )
}

interface CartCardProps {
  product: Product
  amount: number
  increaseAmountProduct: Function
  decreaseAmountProduct: Function
  userId: number
}

function CartCard({
  product,
  amount,
  decreaseAmountProduct,
  increaseAmountProduct,
  userId,
}: CartCardProps) {
  return (
    <li className="flex gap-4 w-full">
      <section className="flex flex-col w-full gap-2">
        <div className="flex w-full gap-2">
          <div
            className={`rounded-lg bg-[url("/spiderman.jpg")] bg-cover bg-center min-w-24 min-h-24`}
          />
          <div className="flex flex-col md:flex-row w-full items-center gap-2 md:gap-0">
            <div className="flex flex-col md:w-full">
              <span className="font-medium truncate max-w-[170px]">
                {product.name}
              </span>
              <span className="font-light truncate max-w-[170px]">
                $ {product.price} / unidad
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 max-w-[110px]">
              <div>
                <button
                  className="rounded-full bg-gray-200 p-2 min-h-8 min-w-8"
                  onClick={() => {
                    if (amount > 1) {
                      decreaseAmountProduct(userId, product.id)
                    }
                  }}
                >
                  <Icon icon="material-symbols:remove" width="16" height="16" />
                </button>
              </div>
              <div>
                <span className="text-center">{amount}</span>
              </div>
              <div>
                <button
                  className="rounded-full bg-gray-200 p-2 min-h-8 min-w-8"
                  onClick={() => increaseAmountProduct(userId, product.id)}
                >
                  <Icon icon="material-symbols:add" width="16" height="16" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </li>
  )
}
