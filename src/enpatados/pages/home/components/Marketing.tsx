import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Marketing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-96 p-8 w-full gap-8 bg-yellow-main">
      <h2 className="text-4xl md:text-6xl xl:text-7xl font-bold text-black-main leading-normal max-w-[900px]">
        Expresate con estilo
      </h2>
      <h3 className="text-xl">
        Destaca con accesorios que reflejan tu estilo único.
      </h3>
      <div className="flex flex-col sm:flex-row gap-8">
        <Link to="/productos">
          <Button variant="blue" className="font-normal py-6 px-8 text-base">
            Compra ahora
          </Button>
        </Link>
        <Button variant="ghost" className="font-normal py-6 px-8 text-base">
          Contactanos
        </Button>
      </div>
    </div>
  )
}
export default Marketing
