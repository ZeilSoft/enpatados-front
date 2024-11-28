// import LinkedinIcon from "../../../utils/LinkedinIcon"

/* import { Icon } from "@iconify/react/dist/iconify.js" */
import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-yellow-50 z-20 text-light w-full">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-4 items-start justify-between mx-auto max-w-7xl w-full px-6 md:px-8 py-10">
        <div className="flex flex-col gap-2 mx-auto text-center lg:text-left lg:mx-0">
          <div className="flex flex-row justify-center items-center lg:justify-start gap-2">
            <img src="/logo.webp" alt="logo" height="60" width="60" />
          </div>
          <p className="text-base max-w-[342px]">
            La vida es muy corta para usar medias aburridas {":)"}
          </p>
        </div>

        <div className="flex flex-col gap-8 mx-auto xsm:grid xsm:grid-cols-2 lg:flex lg:flex-row lg:mx-0 lg:gap-10 xl:gap-20">
          <div className="flex flex-col gap-3 items-center lg:items-start">
            <h3 className="font-semibold text-lg">Paginas</h3>
            <div className="grid grid-cols-2 lg:items-start gap-x-6 gap-y-4">
              <Link
                className="hover:underline hover:text-main transition-colors duration-150"
                to="/"
              >
                Inicio
              </Link>

              <Link
                className="hover:underline hover:text-main transition-colors duration-150"
                to="/productos"
              >
                Product
              </Link>

              <Link
                className="hover:underline hover:text-main transition-colors duration-150"
                to="/contacto"
              >
                Contactanos
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center lg:items-start">
            <h3 className="font-semibold text-lg text-center lg:text-left">
              Contactanos
            </h3>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <p className="flex">
                <a
                  className="flex text-black items-center gap-2"
                  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlDSvTcvwbKsgxpTwJFjGhxSmBvxPqNQKXdcbGtHmpXkPgGljBCpmVbMqRKrxmmZclHNXB"
                  target="_blank"
                >
                  <Icon icon="simple-icons:gmail" width="20" height="20" />
                  <span>enpatadosmedias@gmail.com</span>
                </a>
              </p>

              <p className="flex">
                <a
                  className="flex items-center gap-2"
                  href="https://api.whatsapp.com/send?phone=2613830036"
                  target="_blank"
                >
                  <Icon
                    icon="line-md:phone-filled"
                    width={20}
                    height={20}
                  ></Icon>
                  Telefono: 2613830036
                </a>
              </p>

              <p className="flex text-black">
                <a
                  className="flex items-center gap-2"
                  href="https://www.instagram.com/enpatados"
                  target="_blank"
                >
                  <Icon icon="simple-icons:instagram" width={20} height={20} />
                  <span>@EnPatados</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <hr className="h-[0.5px] mb-4 bg-black border-0 "></hr>
        <div className="text-center font-semibold text-[15px]">
          Necesitas ayuda {" "}
          <Link
            to="/contact"
            className="text-orange-main hover:underline cursor-pointer"
          >
            Contactanos.
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
