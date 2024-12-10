import { Icon } from "@iconify/react/dist/iconify.js"
import { Link, NavLink, useLocation } from "react-router-dom"

import { useAuthContext } from "@/auth/context/auth-context"
import { Button } from "../ui/button"
import { useLogout } from "@/auth/hooks/useLogout"
import { useEffect, useState } from "react"
import Cart from "./Cart"
import { GoToTop } from "@/utils/toUp"

const Navbar = () => {
  const { logOut } = useLogout()
  const { authUser } = useAuthContext()
  const [open, setOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const { pathname } = useLocation()
  useEffect(() => {
    // Deshabilitar scroll al abrir el modal
    if (cartOpen || open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    // Limpiar estilo al desmontar el componente
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [cartOpen, open])
  return (
    <nav
      className={`sticky w-full top-0 z-50 transition-colors duration-200 ${
        pathname == "/" ? "bg-gray-main" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl p-4 2xl:pl-0">
        <div className="relative flex h-10 items-center gap-10">
          <div className="flex items-center justify-between w-full">
            {/* mobile buttons */}
            <div className="items-center md:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md text-black-main hover:bg-gray-main/80 hover:text-black-main focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light"
                aria-controls="mobile-menu"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open main menu</span>

                {/* Open */}
                <Icon
                  className={`${open ? "block" : "block ml-[-3px]"}`}
                  icon="material-symbols:menu"
                  width="24"
                  height="24"
                />
              </button>
            </div>

            <Link
              className={`flex flex-shrink-0 items-end justify-end gap-3 ${
                authUser === null ? "-ml-[21px] md:ml-0" : ""
              }`}
              to="/"
              onClick={GoToTop}
              aria-label="Home"
            >
              <img className="size-14 md:size-16" src="/logo.webp" alt="Logo" />
            </Link>

            <div className={`items-center flex justify-end gap-6`}>
              {/* Navlinks */}
              <div className="hidden md:ml-6 md:flex md:flex-1">
                <div className="flex w-full items-center justify-end text-center flex-row gap-2 ">
                  <NavLink
                    onClick={GoToTop}
                    to="/sobre-nosotros"
                    className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-yellow-main transition-all duration-300 ${
                      pathname === "/sobre-nosotros"
                        ? "text-yellow-main"
                        : "text-black-main"
                    }`}
                  >
                    Sobre nosotros
                    <span
                      className={`h-[2.5px] inline-block bg-yellow-main absolute left-1/2 -translate-x-1/2 bottom-[1px] transition-[width] ease duration-[400ms] ${
                        pathname === "/sobre-nosotros" ? "w-[80%]" : "w-0"
                      }`}
                    >
                      &nbsp;
                    </span>
                  </NavLink>

                  <NavLink
                    onClick={GoToTop}
                    to="/productos"
                    className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-yellow-main transition-all duration-300 ${
                      pathname === "/productos"
                        ? "text-yellow-main"
                        : "text-black-main"
                    }`}
                  >
                    Productos
                    <span
                      className={`h-[2.5px] inline-block bg-yellow-main absolute left-1/2 -translate-x-1/2 bottom-[1px] transition-[width] ease duration-[400ms] ${
                        pathname === "/productos" ? "w-[80%]" : "w-0"
                      }`}
                    >
                      &nbsp;
                    </span>
                  </NavLink>

                  <NavLink
                    onClick={GoToTop}
                    to="/promociones"
                    className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-yellow-main transition-all duration-300 ${
                      pathname === "/promociones"
                        ? "text-yellow-main"
                        : "text-black-main"
                    }`}
                  >
                    Promociones
                    <span
                      className={`h-[2.5px] inline-block bg-yellow-main absolute left-1/2 -translate-x-1/2 bottom-[1px] transition-[width] ease duration-[400ms] ${
                        pathname === "/promociones" ? "w-[80%]" : "w-0"
                      }`}
                    >
                      &nbsp;
                    </span>
                  </NavLink>

                  <NavLink
                    onClick={GoToTop}
                    to="/contacto"
                    className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-yellow-main transition-all duration-300 ${
                      pathname === "/contacto"
                        ? "text-yellow-main"
                        : "text-black-main"
                    }`}
                  >
                    Contactanos
                    <span
                      className={`h-[2.5px] inline-block bg-yellow-main absolute left-1/2 -translate-x-1/2 bottom-[1px] transition-[width] ease duration-[400ms] ${
                        pathname === "/contacto" ? "w-[80%]" : "w-0"
                      }`}
                    >
                      &nbsp;
                    </span>
                  </NavLink>
                  {authUser != null && (
                    <div>
                      <button
                        type="button"
                        className="px-3 py-2 inline-flex items-center justify-center rounded-md text-black-main hover:bg-gray-main/80 hover:text-black-main focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light"
                        aria-controls="mobile-menu"
                        aria-expanded={cartOpen}
                        onClick={() => setCartOpen(!cartOpen)}
                      >
                        <span className="sr-only">Open main menu</span>

                        {/* Open */}
                        <Icon icon="mdi:cart" width="24" height="24" />
                      </button>
                    </div>
                  )}

                  {authUser?.user.role == "admin" && (
                    <NavLink
                      onClick={GoToTop}
                      to="/admin"
                      className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-yellow-main transition-all duration-300 ${
                        pathname === "/admin"
                          ? "text-yellow-main"
                          : "text-black-main"
                      }`}
                    >
                      Administracion
                      <span
                        className={`h-[2.5px] inline-block bg-yellow-main absolute left-1/2 -translate-x-1/2 bottom-[1px] transition-[width] ease duration-[400ms] ${
                          pathname === "/admin" ? "w-[80%]" : "w-0"
                        }`}
                      >
                        &nbsp;
                      </span>
                    </NavLink>
                  )}

                  {authUser ? (
                    <div className="flex items-center justify-center gap-3">
                      <Button variant="authButton" onClick={logOut}>
                        Cerrar sesion
                      </Button>
                    </div>
                  ) : (
                    <>
                      <Link to="/auth/iniciar-sesion" onClick={GoToTop}>
                        <Button variant="authButton">Iniciar sesion</Button>
                      </Link>

                      <Link to="/auth/registrarse" onClick={GoToTop}>
                        <Button variant="authButton">Registrarse</Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>

              {/* Cart button */}
              {authUser != null && (
                <div className="flex items-center md:hidden w-full">
                  <button
                    type="button"
                    className="flex items-center justify-center rounded-md text-black-main hover:bg-gray-main/80 hover:text-black-main focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light"
                    aria-controls="mobile-menu"
                    aria-expanded={cartOpen}
                    onClick={() => setCartOpen(!cartOpen)}
                  >
                    <span className="sr-only">Open main menu</span>

                    {/* Open */}
                    <Icon icon="mdi:cart" width="24" height="24" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />

        {/* Mobile menu, show/hide based on menu state. */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex justify-start z-50 md:hidden transition-all duration-300 ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setOpen(!open)}
        >
          <div
            className={`bg-white w-[280px] h-full p-6 flex flex-col gap-6 transition-all duration-300 ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-row items-center justify-end">
              <button
                type="button"
                onClick={() => {
                  GoToTop()
                  setOpen(false)
                }}
              >
                <Icon
                  className="text-black-main"
                  icon="material-symbols:close"
                  width="24"
                  height="24"
                />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-gray-main text-black-main"
                      : "text-black-main hover:bg-gray-main/80 hover:text-black-main"
                  } transition-colors duration-300`
                }
                onClick={() => {
                  GoToTop()
                  setOpen(false)
                }}
              >
                Inicio
              </NavLink>

              <NavLink
                to="/sobre-nosotros"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-gray-main text-black-main"
                      : "text-black-main hover:bg-gray-main/80 hover:text-black-main"
                  } transition-colors duration-300`
                }
                onClick={() => {
                  GoToTop()
                  setOpen(false)
                }}
              >
                Sobre nosotros
              </NavLink>

              <NavLink
                to="productos"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-gray-main text-black-main"
                      : "text-black-main hover:bg-gray-main/80 hover:text-black-main"
                  } transition-colors duration-300`
                }
                onClick={() => {
                  GoToTop()
                  setOpen(false)
                }}
              >
                Productos
              </NavLink>

              <NavLink
                to="promociones"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-gray-main text-black-main"
                      : "text-black-main hover:bg-gray-main/80 hover:text-black-main"
                  } transition-colors duration-300`
                }
                onClick={() => {
                  GoToTop()
                  setOpen(false)
                }}
              >
                promociones
              </NavLink>

              <NavLink
                to="contacto"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-gray-main text-black-main"
                      : "text-black-main hover:bg-gray-main/80 hover:text-black-main"
                  } transition-colors duration-300`
                }
                onClick={() => {
                  GoToTop()
                  setOpen(false)
                }}
              >
                Contactanos
              </NavLink>

              {authUser?.user.role == "admin" && (
                <NavLink
                  to="admin"
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-base font-medium ${
                      isActive
                        ? "bg-gray-main text-black-main"
                        : "text-black-main hover:bg-gray-main/80 hover:text-black-main"
                    } transition-colors duration-300`
                  }
                  onClick={() => {
                    GoToTop()
                    setOpen(false)
                  }}
                >
                  Administracion
                </NavLink>
              )}

              {authUser ? (
                <Button variant="authButton" onClick={logOut}>
                  Cerrar sesion
                </Button>
              ) : (
                <div className="flex flex-col w-full gap-4">
                  <Link
                    to="/auth/iniciar-sesion"
                    className="w-full"
                    onClick={GoToTop}
                  >
                    <Button variant="authButton" className="w-full">
                      Iniciar sesion
                    </Button>
                  </Link>

                  <Link
                    to="/auth/registrarse"
                    className="w-full"
                    onClick={GoToTop}
                  >
                    <Button variant="authButton" className="w-full">
                      Registrarse
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
