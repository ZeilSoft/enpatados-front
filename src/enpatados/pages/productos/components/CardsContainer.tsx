import { Product } from "@/enpatados/interfaces/Product"
import { Icon } from "@iconify/react/dist/iconify.js"
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { ProductCarousel } from "./ProductCarousel"
import { Button } from "@/components/ui/button"

interface CardsContainerProps {
  products?: Product[]
}
const CardsContainer = ({ products }: CardsContainerProps) => {
  return (
    <div>
      {products ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-6">
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
  const [openModal, setOpenModal] = useState(false)
  useEffect(() => {
    // Deshabilitar scroll al abrir el modal
    if (openModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    // Limpiar estilo al desmontar el componente
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [openModal])
  return (
    <>
      <button
        className="flex flex-col max-w-96 gap-4"
        onClick={() => setOpenModal(!openModal)}
      >
        <header
          className={`bg-[url("/spiderman.jpg")] bg-cover bg-center size-40 rounded-md`}
        />
        <footer className="">
          <span className="font-medium">{product.name}</span>
          <p className="font-extralight">$ {product.price}</p>
        </footer>
      </button>
      <AnimatePresence>
        {openModal && (
          <main
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center h-screen w-screen"
            onClick={() => setOpenModal(false)}
          >
            <Icon
              icon="material-symbols:close-rounded"
              width="60"
              height="60"
              className="z-50 -top-3 -right-3 md:right-4 md:top-4 absolute p-2 cursor-pointer text-black md:text-white"
              onClick={() => setOpenModal(false)}
            />
            <div
              className="flex flex-col md:flex-row gap-6 md:gap-0 bg-lilac-main md:bg-white h-screen w-screen md:max-w-[700px] md:max-h-[300px] md:items-center md:rounded-lg relative"
              onClick={(e) => e.stopPropagation()}
            >
              <header className="w-full pt-2 md:w-[40%]">
                <ProductCarousel />
              </header>
              <section className="flex flex-col justify-start md:justify-center gap-4 overflow-y-auto bg-white p-2 rounded-t-lg md:rounded-l-lg h-full w-full">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <div className="flex gap-2">
                  <span className="text-green-main border border-green-main py-1 px-2 rounded-full">
                    {product.category.name}
                  </span>
                  <span className="text-green-main border border-green-main py-1 px-2 rounded-full">
                    {product.subcategory.name}
                  </span>
                </div>
                <div className="flex">
                  <h4 className="font-extralight rounded-full px-4 py-2 border border-orange-main bg-orange-main/80 text-white">
                    $ {product.price}
                  </h4>
                </div>
                <h5 className="font-normal">{product.description}</h5>

                <Button variant="green" className="w-full hidden md:flex gap-2">
                <Icon
                icon="material-symbols:shopping-cart"
                width="30"
                height="30"
              />
                  Agregar al carrito
                </Button>
              </section>
            </div>
            <Button
              variant="green"
              className="w-full flex gap-2 md:hidden absolute bottom-2"
              onClick={(e) => e.stopPropagation()}
            >
              <Icon
                icon="material-symbols:shopping-cart"
                width="30"
                height="30"
              />
              Agregar al carrito
            </Button>
          </main>
        )}
      </AnimatePresence>
    </>
  )
}
