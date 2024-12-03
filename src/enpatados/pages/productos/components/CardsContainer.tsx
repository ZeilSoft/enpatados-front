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
        <div className="grid grid-cols-5 gap-6">
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
          <main className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center h-screen w-screen"
          onClick={() => setOpenModal(false)}>
            <Icon
              icon="material-symbols:close-rounded"
              width="60"
              height="60"
              
              className="z-50 top-0 right-0 absolute p-2 cursor-pointer text-black md:text-white"
              onClick={() => setOpenModal(false)}
            />
            <div className="flex flex-col md:flex-row gap-4 p-2 bg-lilac-main h-screen w-screen md:max-w-[700px] md:max-h-[300px] md:items-center md:rounded-lg relative" onClick={(e) => e.stopPropagation()}>
              <header className="w-full md:w-[40%]">
                <ProductCarousel />
              </header>
              <section className="flex flex-col gap-2 overflow-y-auto">
                <h3 className="font-semibold">{product.name}</h3>
                <h4 className="font-extralight">{product.price}</h4>
                <h5 className="font-normal">{product.description}</h5>
                <Button variant="green" className="w-full hidden md:block">
                  Agregar al carrito
                </Button>
              </section>
            </div>
            <Button
              variant="green"
              className="w-full block md:hidden absolute bottom-2"
              onClick={(e) => e.stopPropagation()}
            >
              Agregar al carrito
            </Button>
          </main>
        )}
      </AnimatePresence>
    </>
  )
}
