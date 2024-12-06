import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-black-main z-20 text-white w-full">
      <div className="flex flex-col lg:flex-row items-start mx-auto max-w-7xl w-full px-6 md:px-8 py-10 gap-8 md:gap-0">
        <div className="flex flex-col gap-2 mx-auto text-center lg:mx-0 w-full">
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-row justify-center items-center bg-white rounded-full size-[280px]">
              <img src="/logo.webp" alt="logo" height="100" width="100" />
            </div>
          </div>

          <p className="text-base text-center">Enpatados indumentaria</p>
          <p className="text-base text-center">© 2024 Enpatados</p>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h3 className="font-semibold text-xl text-center">Servicios</h3>
          <div className="flex flex-col gap-4 text-center">
            <Link
              className="hover:underline hover:text-main transition-colors duration-150 text-yellow-main"
              to="/"
            >
              Inicio
            </Link>

            <Link
              className="hover:underline hover:text-main transition-colors duration-150 text-yellow-main"
              to="/productos"
            >
              Productos
            </Link>

            <Link
              className="hover:underline hover:text-main transition-colors duration-150 text-yellow-main"
              to="/contacto"
            >
              Contactanos
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h3 className="font-semibold text-xl text-center">Enpatados</h3>
          <div className="flex flex-col gap-4 text-center">
            <Link
              className="hover:underline hover:text-main transition-colors duration-150 text-yellow-main"
              to="/productos"
            >
              Productos
            </Link>

            <Link
              className="hover:underline hover:text-main transition-colors duration-150 text-yellow-main"
              to="/contacto"
            >
              Contactanos
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center w-full">
          <h3 className="font-semibold text-xl text-center">Redes sociales</h3>
          <div className="flex flex-col gap-4 text-center">
            <a
              className="hover:underline hover:text-main transition-colors duration-150 text-yellow-main"
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlDSvTcvwbKsgxpTwJFjGhxSmBvxPqNQKXdcbGtHmpXkPgGljBCpmVbMqRKrxmmZclHNXB"
            >
              Gmail
            </a>

            <a
              className="hover:underline hover:text-main transition-colors duration-150 text-yellow-main"
              href="https://api.whatsapp.com/send?phone=2613830036"
            >
              WhatsApp
            </a>

            <a
              className="hover:underline hover:text-main transition-colors duration-150 text-yellow-main"
              href="https://www.instagram.com/enpatados"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
