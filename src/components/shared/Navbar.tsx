import { Icon } from "@iconify/react/dist/iconify.js"
import { Link, NavLink } from "react-router-dom"

import ItemsNavbar from "./ItemsNavbar"
import { useAuthContext } from "@/auth/context/auth-context"

const Navbar = () => {
  /* const { logOut } = useLogout() */
  const { authUser } = useAuthContext()

  return (
    <nav className="sticky w-full top-0 z-50 border-b-[1px] border-b-black bg-white">
      <div className="mx-auto max-w-7xl p-4 2xl:pl-0">
        <div className="relative flex h-16 items-center gap-10">
          <div className="flex items-center justify-between w-full">
            <Link
              className="flex flex-shrink-0 items-center justify-center gap-3"
              to="/"
              aria-label="Home"
            >
              <img
                className="w-16 h-14"
                src="/navbar.jpg"
                alt="Techlibrary logo"
              />

              {/*  <h1
                className="text-2xl font-bold hidden leading-none md:block mt-5"
                translate="no"
              >
                Tech Library
              </h1> */}
            </Link>

            <div className={`items-center flex justify-end gap-6`}>
              <div className="flex items-center justify-center gap-3">
                {authUser ? (
                  <div className="flex items-center justify-center gap-3">
                    <NavLink
                      to="/favorites"
                      className={({ isActive }) =>
                        `${isActive ? "active-link" : ""}`
                      }
                    >
                      <Icon
                        icon="tdesign:heart-filled"
                        width="48"
                        height="48"
                      />
                    </NavLink>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-1.5">
                    <div className="hidden md:flex md:gap-3">
                      <ItemsNavbar
                        name="INICIAR SESIÓN"
                        path="/auth/iniciar-sesion"
                        key={crypto.randomUUID()}
                      />

                      <ItemsNavbar
                        name="REGISTRARSE"
                        path="/auth/registrarse"
                        key={crypto.randomUUID()}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
