import { useAuthContext } from "@/auth/context/auth-context"
import { Button } from "@/components/ui/button"
import { Product } from "@/enpatados/interfaces/Product"
import { CartProducts, useCartStore } from "@/store/cart.store"
import { Icon } from "@iconify/react/dist/iconify.js"
import { motion } from "framer-motion"
interface CardsContainerProps {
  products?: Product[]
}
const CardsContainer = ({ products }: CardsContainerProps) => {
  return (
    <div>
      {products ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
          {products.map((product: Product) => (
            <Cards key={product.id} product={product} />
          ))}
        </div>
      ) : (
        "No se han encontrado productos"
      )}
    </div>
  )
}
export default CardsContainer
interface CardsProps {
  product: Product
}
function Cards({ product }: CardsProps) {
  const { authUser } = useAuthContext()
  const addProduct = useCartStore((state) => state.addProduct)
  const productStore = useCartStore(
    (state) =>
      state.cart.find(
        (productStorage) => productStorage.userId === authUser?.user.id
      ) || { products: [] }
  )
  let isProductInCart

  if (authUser != null && productStore.products.length > 0) {
    isProductInCart = (
      productStore as { userId: string; products: CartProducts[] }
    ).products.some(
      (productStorage: CartProducts) => productStorage.product.id === product.id
    )
  }

  function handleAddCart() {
    if (!authUser) return
    addProduct({
      userId: authUser?.user.id,
      product: { product: product, amount: 1 },
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center max-w-96 gap-4"
    >
      <img
        src={product.images[0].url}
        alt="Product Image"
        className="w-60 h-80 rounded-md object-center"
      />

      <div className="flex flex-col items-center justify-center gap-4">
        <span className="font-semibold">{product.name}</span>
        <p className="font-bold">$ {product.price}</p>
        <p className="line-clamp-3 text-center w-60">{product.description}</p>
      </div>
      <footer className="">
        {authUser === null ? (
          <small className="flex gap-2 items-center justify-center text-center w-60 text-red-600 font-bold">
            Debe estar registrado en la pagina para poder realizar compras
          </small>
        ) : (
          <div>
            {isProductInCart ? (
              <small className="flex items-center justify-center text-center w-60 text-blue-main font-bold">
                Este producto ya esta agregado al carrito
              </small>
            ) : (
              <Button
                variant="blue"
                className="flex gap-2"
                onClick={handleAddCart}
              >
                Agregar al carrito
                <Icon icon="lucide:arrow-right" />
              </Button>
            )}
          </div>
        )}
      </footer>
    </motion.div>
  )
}
