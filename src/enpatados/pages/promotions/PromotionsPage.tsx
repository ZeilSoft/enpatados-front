import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
const PromotionsPage = () => {
  return (
    <main className="flex flex-col justify-center items-center bg-white w-full">
      <section className="flex flex-col justify-center items-center p-8 gap-28 max-w-[850px] w-full">
        <div className="flex flex-col justify-center items-center w-full ">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl xl:text-7xl font-bold text-yellow-main leading-normal"
          >
            Promociones
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl text-center"
          >
            Aprovecha nuestras promociones y descuentos exclusivos para
            disfrutar de los mejores accesorios al mejor precio. No dejes pasar
            la oportunidad de renovar tu estilo con increíbles ofertas.
          </motion.p>
        </div>
        <img src="/promo.jpeg" alt="promotion image" className="size-96"/>
      </section>

      <section className="flex flex-col justify-center items-center bg-yellow-main p-8 gap-8 w-full min-h-[500px]">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-semibold text-black-main leading-normal max-w-[850px]"
        >
          Atrevete a comprar medias únicas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-center"
        >
          La mejor forma de destacar empieza con nosotros.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-8"
        >
          <Link to="/auth/iniciar-sesion">
            <Button variant="blue" className="font-normal py-6 px-8 text-base">
              Iniciar sesión
            </Button>
          </Link>

          <Button variant="ghost" className="font-normal py-6 px-8 text-base">
            Contactanos
          </Button>
        </motion.div>
      </section>
    </main>
  )
}
export default PromotionsPage
