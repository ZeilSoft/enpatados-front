import { Icon } from "@iconify/react/dist/iconify.js"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
const Categories = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <section className="flex flex-col gap-12">
      <motion.div
        className="text-center"
        animate={{
          opacity: scrollY > 100 ? 1 : 0,
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="font-bold text-darken text-2xl">
          Todos los <span className="text-yellow-500">Accesorios</span> en un
          lugar.
        </h1>

        <p className="leading-relaxed text-gray-500">
          Una gran cantidad de diseños y colores para todo los gustos.
        </p>
      </motion.div>

      <div className="flex flex-col items-center justify-center md:flex-row gap-14">
        <motion.div
          className="bg-white shadow-2xl p-4 text-center rounded-xl max-w-96 min-h-40"
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: scrollY > 100 ? 0 : 100,
            opacity: scrollY > 100 ? 1 : 0,
          }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12 bg-white">
            <Icon icon="icon-park-outline:socks" width="24" height="24" />
          </div>
          <div className="-mt-8">
            <h1 className="font-medium text-xl">Medias</h1>

            <p className="font-normal text-lg">
              Medias con diseño minimalista y moderno
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white shadow-2xl p-4 text-center rounded-xl max-w-96 min-h-40"
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: scrollY > 180 ? 0 : 100,
            opacity: scrollY > 100 ? 1 : 0,
          }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12 bg-white">
            <Icon icon="solar:glasses-outline" width="24" height="24" />
          </div>
          <div className="-mt-8">
            <h1 className="font-medium text-xl">Anteojos</h1>

            <p className="font-normal text-lg">
              Anteojos con diseño moderno y minimalista
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default Categories
