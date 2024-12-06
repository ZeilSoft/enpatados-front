import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const PromotionsPage = () => {
  return (
    <main className="flex flex-col justify-center items-center">
      <section className="flex flex-col justify-center items-center bg-gray-main p-8 w-full gap-8">
        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold text-yellow-main leading-normal max-w-[850px]">
          Promociones
        </h1>
        <p className="text-2xl text-center">
          Aprovecha nuestras promociones y descuentos exclusivos para disfrutar
          de los mejores accesorios al mejor precio. No dejes pasar la
          oportunidad de renovar tu estilo con increíbles ofertas.
        </p>
        <img src="/spiderman.jpg" alt="" />
      </section>
      <section className="flex flex-col justify-center items-center bg-yellow-main p-8 gap-8 w-full min-h-[500px]">
        <h2 className="text-4xl md:text-5xl font-semibold text-black-main leading-normal max-w-[850px]">
          Atrevete a comprar medias únicas
        </h2>
        <p className="text-2xl text-center">
          La mejor forma de destacar empieza con nosotros.
        </p>
        <div className="flex flex-col sm:flex-row gap-8">
          <Link to="/auth/iniciar-sesion">
            <Button variant="blue" className="font-normal py-6 px-8 text-base">
              Iniciar sesión
            </Button>
          </Link>
          <Button variant="ghost" className="font-normal py-6 px-8 text-base">
            Contactanos
          </Button>
        </div>
      </section>
    </main>
  )
}
export default PromotionsPage
