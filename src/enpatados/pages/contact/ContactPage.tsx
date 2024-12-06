import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom"

const ContactPage = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <section className="flex flex-col items-center justify-center gap-8 p-8 bg-white w-full min-h-[500px]">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-main leading-normal max-w-[850px]">
          Contactanos
        </h1>
        <p className="text-2xl text-center max-w-[850px]">
          Si tienes alguna duda o propuesta, no dudes en contactarnos. Estamos
          aquí para ayudarte y escuchar tus ideas. ¡Tu opinión es importante
          para nosotros y queremos brindarte la mejor experiencia!
        </p>
      </section>

      <section className="flex flex-col items-center justify-center p-8 w-full bg-gray-main gap-16 min-h-[400px]">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-main leading-normal max-w-[900px] text-center">
          Algunas de nuestras redes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <CardContact
            title="Instagran"
            description="Describe the feature and explain the benefits for your audience."
            icon="mdi:instagram"
            link="https://www.instagram.com/enpatados"
          />

          <CardContact
            title="Whatsapp"
            description="Describe the feature and explain the benefits for your audience."
            icon="ic:baseline-whatsapp"
            link="https://api.whatsapp.com/send?phone=2613830036"
          />

          <CardContact
            title="Gmail"
            description="Describe the feature and explain the benefits for your audience."
            icon="bxl:gmail"
            link="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlDSvTcvwbKsgxpTwJFjGhxSmBvxPqNQKXdcbGtHmpXkPgGljBCpmVbMqRKrxmmZclHNXB"
          />
        </div>
      </section>
    </main>
  )
}
export default ContactPage

interface CardContactProps {
  title: string
  description: string
  icon: string
  link: string
}
function CardContact({ description, icon, title, link }: CardContactProps) {
  return (
    <Link
      className="flex flex-col gap-6 max-w-96 py-4 px-8 rounded-lg border border-white"
      to={link}
    >
      <div className="flex items-center justify-center">
        <Icon icon={icon} height={32} width={32} className="text-yellow-main" />
      </div>
      <h3 className="text-2xl text-yellow-main text-center">{title}</h3>
      <p className="text-center">{description}</p>
    </Link>
  )
}
