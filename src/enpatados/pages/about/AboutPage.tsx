import { motion } from "framer-motion"
const AboutPage = () => {
  return (
    <main className="flex flex-col w-full">
      <section className="flex flex-col items-center justify-center bg-gray-main min-h-96 p-8 w-full gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl xl:text-7xl font-bold text-yellow-main leading-normal max-w-[900px] text-center"
        >
          Calzate con enpatados
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
      </section>
      <section className="flex items-center justify-center bg-yellow-main min-h-96 p-8 w-full">
        <div className="flex flex-col gap-8 max-w-[700px]">
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nuestra historia
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-black-main "
          >
            Enpatados
          </motion.h1>
          <div>
            <p>
              Enpatados es más que un simple emprendimiento de medias; es el
              resultado de una amistad sólida y una pasión compartida por la
              comodidad. Desde sus inicios, nos propusimos vender medias que no
              solo sean cómodas, sino que también reflejen la personalidad de
              quienes las usan. Nuestro objetivo es expandir Enpatados,
              convirtiéndonos en una emprendimiento reconocido y apreciado, que
              no solo ofrezca una amplia variedad de diseños de medias, sino
              también otros productos. Queremos que Enpatados lleve alegría y
              comodidad a los pies de nuestros clientes.
            </p>

            <p>
              Nuestro emprendimiento de medias nace con el propósito de ofrecer
              soluciones de calidad para cada paso que das. Nuestros productos
              brindan calidez y confort, también reflejan tu personalidad y
              estilo único. Con una variedad modelos, buscamos inspirar a
              nuestros usuarios a expresarse y sentirse bien en cada momento de
              su día, ya sea en el trabajo, en casa o en sus actividades
              deportivas.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
export default AboutPage
