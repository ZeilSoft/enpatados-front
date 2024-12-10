import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { GoToTop } from "@/utils/toUp"
const Marketing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-96 p-8 w-full gap-8 bg-yellow-main">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl xl:text-7xl text-center font-bold text-black-main leading-normal max-w-[900px]"
      >
        Expresate con estilo
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xl text-center"
      >
        Destaca con accesorios que reflejan tu estilo único.
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-8"
      >
        <Link to="/productos" onClick={GoToTop}>
          <Button variant="blue" className="font-normal py-6 px-8 text-base">
            Compra ahora
          </Button>
        </Link>
        <Link to="/contacto" onClick={GoToTop}>
          <Button variant="ghost" className="font-normal py-6 px-8 text-base">
            Contactanos
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}
export default Marketing
