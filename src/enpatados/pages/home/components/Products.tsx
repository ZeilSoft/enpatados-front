import { motion } from "framer-motion"
import { useEffect, useState } from "react"
const Products = () => {
  const [scrollY, setScrollY] = useState(0)
  const [threshold, setThreshold] = useState(540)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    const updateThreshold = () => {
      if (window.innerWidth <= 767) {
        setThreshold(870)
      } else {
        setThreshold(480)
      }
    }
    updateThreshold()
    window.addEventListener("resize", updateThreshold)

    window.removeEventListener("resize", updateThreshold)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        className="text-center max-w-screen-md mx-auto"
        animate={{
          opacity: scrollY > 480 ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="text-3xl font-bold mb-4">
          ¿Que estás <span className="text-yellow-500">buscando?</span>
        </h1>

        <p>
          Dentro de la gran variedad de productos que te ofrecemos podrás
          encontrar el que más se adecue a tu estilo de vida.
        </p>

        <p>Desde películas y series hasta deportes y juegos de mesa.</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 justify-center items-center">
      <motion.div
        animate={{
          y: scrollY > threshold ? 0 : 100,
          opacity: scrollY > threshold ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center h-52 w-72 md:h-72 md:w-96 bg-[url('spiderman.jpg')] bg-no-repeat bg-cover bg-center rounded-2xl"
      >
        <div className="flex justify-center items-center bg-black bg-opacity-20 w-full h-full rounded-2xl">
          <div className="flex flex-col justify-center items-center">
            <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
              Peliculas
            </h1>
            <button className="rounded-full text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              Mira nuestros productos
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: scrollY > threshold ? 0 : 100,
          opacity: scrollY > threshold ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center h-52 w-72 md:h-72 md:w-96 bg-[url('messi.jpg')] bg-no-repeat bg-cover bg-center rounded-2xl"
      >
        <div className="flex justify-center items-center bg-black bg-opacity-20 w-full h-full rounded-2xl">
          <div className="flex flex-col justify-center items-center">
            <h1 className="uppercase text-white font-bold text-center text-sm lg:text-xl mb-3">
              Deportes
            </h1>
            <button className="rounded-full text-white border text-xs lg:text-md px-6 py-3 w-full font-medium focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
              Mira nuestros productos
            </button>
          </div>
        </div>
      </motion.div>
      </div>
    </div>
  )
}
export default Products
