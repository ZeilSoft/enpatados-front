import { Product } from "@/enpatados/interfaces/Product"
import { Button } from "../ui/button"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useAuthContext } from "@/auth/context/auth-context"
import { CartProducts, useCartStore } from "@/store/cart.store"
import { useMutation } from "@tanstack/react-query"
import { createOrder, OrderProducts } from "@/enpatados/services/orderService"

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

  const clearCart = useCartStore((state) => state.clearCart)

  let subtotal: number = 0

  products.forEach((product: CartProducts) => {
    subtotal += product.amount * product.product.price
  })

  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      let sendProducts: { products: OrderProducts[] } = { products: [] }

      products.forEach((product: CartProducts) => {
        const productToSend = {
          id: product.product.id!,
          quantity: product.amount,
        }
        sendProducts.products.push(productToSend)
      })
      const response = await createOrder(sendProducts)

      return response
    },
    onSuccess: () => {
      setCartOpen(false)
      clearCart(authUser!.user.id)
    }
  })

  function handleSubmit() {
    if (products.length > 0) {
      mutate()
    }
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

          {products.length === 0 && (
            <p className="text-center">No hay productos en el carrito</p>
          )}
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
            disabled={isPending || products.length === 0}
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
  const deleteProductFromCart = useCartStore(
    (state) => state.deleteProductFromCart
  )
  function handleDeleteProduct() {
    deleteProductFromCart(userId.toString(), product.id!)
  }
  return (
    <li className="flex gap-4 w-full">
      <section className="flex flex-col w-full gap-2">
        <div className="flex w-full gap-2">
          <div
            className={`rounded-lg bg-[url("/spiderman.jpg")] bg-cover bg-center min-w-24 min-h-24 relative`}
          />
          <div className="flex flex-col md:flex-row w-full items-center gap-2 md:gap-0">
            <div className="flex flex-col md:w-full">
              <span className="font-medium truncate max-w-[170px]">
                {product.name}
              </span>

              <span className="font-light truncate max-w-[170px]">
                $ {product.price} / unidad
              </span>

              <div className="flex items-center justify-center md:justify-start">
                <Button
                  variant="blue"
                  className="text-xs py-1 w-[80%]"
                  onClick={handleDeleteProduct}
                >
                  Eliminar del carrito
                </Button>
              </div>
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
