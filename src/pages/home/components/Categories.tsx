import { Icon } from "@iconify/react/dist/iconify.js"

const Categories = () => {
  return (
    <section className="flex flex-col gap-12">
      <div className="text-center">
        <h1 className="font-bold text-darken text-2xl">
          Todos los <span className="text-yellow-500">Accesorios</span> en un lugar.
        </h1>

        <p className="leading-relaxed text-gray-500">
          Una gran cantidad de diseños y colores para todo los gustos.
        </p>
        
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row gap-14">
        <div className="bg-white shadow-xl p-4 text-center rounded-xl max-w-96">
          <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
            <Icon icon="icon-park-outline:socks" width="24" height="24" />
          </div>

          <h1 className="font-medium text-xl">Anteojos</h1>

          <p className="font-normal text-lg">
            Medias con diseño minimalista y moderno
          </p>

        </div>

        <div className="bg-white shadow-xl p-4 text-center rounded-xl max-w-96">
          <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto shadow-lg transform -translate-y-12">
            <Icon icon="solar:glasses-outline" width="24" height="24" />

          </div>

          <h1 className="font-medium text-xl">Anteojos</h1>

          <p className="font-normal text-lg">
            Anteojos con diseño moderno y minimalista
          </p>

        </div>
      </div>
    </section>
  )
}
export default Categories
