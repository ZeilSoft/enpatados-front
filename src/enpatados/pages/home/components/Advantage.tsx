import { Icon } from "@iconify/react/dist/iconify.js"

const Advantage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-96 p-8 w-full bg-gray-main gap-16">
      <h2 className="text-4xl md:text-5xl font-bold text-yellow-main leading-normal max-w-[900px] text-center">
        Descubri las ventajas de Enpatados
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CardAdvantage
          title="Combinaciones de estilo únicas"
          description="Combina calcetines y gafas para un look que destaca.."
          icon="lucide:star"
        />
        <CardAdvantage
          title="Precios increíbles"
          description="Disfruta de medias de gran calidad a un precio totalmente accesible."
          icon="lucide:star"
        />
        <CardAdvantage
          title="Comodidad y Estilo en Perfecta Armonía"
          description="Disfruta lo ultimo en confort en cada paso con nuestros productos."
          icon="lucide:star"
        />
      </section>
    </div>
  )
}
export default Advantage

interface CardAdvantageProps {
  title: string
  description: string
  icon: string
}
function CardAdvantage({ description, icon, title }: CardAdvantageProps) {
  return (
    <div className="flex flex-col gap-6 max-w-96 bg-white py-4 px-8 rounded-lg">
      <div className="flex items-center justify-center">
        <Icon icon={icon} height={32} width={32} className="text-yellow-main" />
      </div>
      <h3 className="text-2xl text-yellow-main text-center">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  )
}
