import { Icon } from "@iconify/react/dist/iconify.js"
import { Link, NavLink, useLocation } from "react-router-dom"

import { useAuthContext } from "@/auth/context/auth-context"
import { Button } from "../ui/button"
import { useLogout } from "@/auth/hooks/useLogout"
import { useState } from "react"
import { CartProducts, useCartStore } from "@/store/cart.store"
import { Product } from "@/enpatados/interfaces/Product"

const Navbar = () => {
  const { logOut } = useLogout()
  const { authUser } = useAuthContext()
  const [open, setOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(true)

  const { pathname } = useLocation()

  return (
    <nav className="sticky w-full top-0 z-50 bg-yellow-50">
      <div className="mx-auto max-w-7xl p-4 2xl:pl-0">
        <div className="relative flex h-10 items-center gap-10">
          <div className="flex items-center justify-between w-full">
            {/* mobile buttons */}
            <div className="items-center md:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md text-light hover:bg-main/80 hover:text-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light"
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
              className="flex flex-shrink-0 items-end justify-end gap-3"
              to="/"
              aria-label="Home"
            >
              <img className="size-16" src="/logo.webp" alt="Logo" />
            </Link>

            <div className={`items-center flex justify-end gap-6`}>
              {/* Navlinks */}
              <div className="hidden md:ml-6 md:flex md:flex-1">
                <div className="flex w-full items-center justify-end text-center flex-row gap-2 ">
                  <NavLink
                    to="/"
                    className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-main transition-all duration-300 ${
                      pathname === "/" ? "text-main" : "text-light"
                    }`}
                  >
                    Inicio
                    <span
                      className={`h-[2.5px] inline-block bg-main absolute left-1/2 -translate-x-1/2 bottom-[1px] transition-[width] ease duration-[400ms] ${
                        pathname === "/" ? "w-[80%]" : "w-0"
                      }`}
                    >
                      &nbsp;
                    </span>
                  </NavLink>

                  <NavLink
                    to="/productos"
                    className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-main transition-all duration-300 ${
                      pathname === "/productos" ? "text-main" : "text-light"
                    }`}
                  >
                    Productos
                    <span
                      className={`h-[2.5px] inline-block bg-main absolute left-1/2 -translate-x-1/2 bottom-[1px] transition-[width] ease duration-[400ms] ${
                        pathname === "/productos" ? "w-[80%]" : "w-0"
                      }`}
                    >
                      &nbsp;
                    </span>
                  </NavLink>

                  <NavLink
                    to="/contacto"
                    className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-main transition-all duration-300 ${
                      pathname === "/contact" ? "text-main" : "text-light"
                    }`}
                  >
                    Contactanos
                    <span
                      className={`h-[2.5px] inline-block bg-main absolute left-1/2 -translate-x-1/2 bottom-[1px] transition-[width] ease duration-[400ms] ${
                        pathname === "/contact" ? "w-[80%]" : "w-0"
                      }`}
                    >
                      &nbsp;
                    </span>
                  </NavLink>
                  <div>
                    <button
                      type="button"
                      className="px-3 py-2 inline-flex items-center justify-center rounded-md text-light hover:bg-main/80 hover:text-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light"
                      aria-controls="mobile-menu"
                      aria-expanded={cartOpen}
                      onClick={() => setCartOpen(!cartOpen)}
                    >
                      <span className="sr-only">Open main menu</span>

                      {/* Open */}
                      <Icon icon="mdi:cart" width="24" height="24" />
                    </button>
                  </div>

                  {authUser?.user.role == "admin" && (
                    <NavLink
                      to="/admin"
                      className={`rounded-md px-3 py-2 text-sm font-medium relative group hover:text-main transition-all duration-300 ${
                        pathname === "/admin" ? "text-main" : "text-light"
                      }`}
                    >
                      Administracion
                      <span
                        className={`h-[2.5px] inline-block bg-main absolute left-1/2 -translate-x-1/2 bottom-[1px] transition-[width] ease duration-[400ms] ${
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
                      <Button variant="authButton">
                        <Link to="/auth/iniciar-sesion">Iniciar sesion</Link>
                      </Button>

                      <Button variant="authButton">
                        <Link to="/auth/registrarse">Registrarse</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>

              {/* Cart button */}
              <div className="flex items-center md:hidden w-full">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md text-light hover:bg-main/80 hover:text-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light"
                  aria-controls="mobile-menu"
                  aria-expanded={cartOpen}
                  onClick={() => setCartOpen(!cartOpen)}
                >
                  <span className="sr-only">Open main menu</span>

                  {/* Open */}
                  <Icon
                    className={`${open ? "block" : "block ml-[-63px]"}`}
                    icon="mdi:cart"
                    width="24"
                    height="24"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />

        {/* Mobile menu, show/hide based on menu state. */}
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-start z-50 md:hidden transition-all duration-300 ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setOpen(!open)}
        >
          <div
            className={`bg-yellow-50 w-[280px] h-full p-6 flex flex-col gap-6 transition-all duration-300 ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-row items-center justify-end">
              <button type="button" onClick={() => setOpen(false)}>
                <Icon
                  className="text-light"
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
                      ? "bg-main text-light"
                      : "text-light hover:bg-main/80 hover:text-light"
                  } transition-colors duration-300`
                }
                onClick={() => setOpen(false)}
              >
                Inicio
              </NavLink>

              <NavLink
                to="productos"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-main text-light"
                      : "text-light hover:bg-main/80 hover:text-light"
                  } transition-colors duration-300`
                }
                onClick={() => setOpen(false)}
              >
                Productos
              </NavLink>

              <NavLink
                to="contacto"
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive
                      ? "bg-main text-light"
                      : "text-light hover:bg-main/80 hover:text-light"
                  } transition-colors duration-300`
                }
                onClick={() => setOpen(false)}
              >
                Contactanos
              </NavLink>

              {authUser?.user.role == "admin" && (
                <NavLink
                  to="admin"
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-base font-medium ${
                      isActive
                        ? "bg-main text-light"
                        : "text-light hover:bg-main/80 hover:text-light"
                    } transition-colors duration-300`
                  }
                  onClick={() => setOpen(false)}
                >
                  Administracion
                </NavLink>
              )}

              {authUser ? (
                <Button variant="authButton" onClick={logOut}>
                  Cerrar sesion
                </Button>
              ) : (
                <>
                  <Button variant="authButton">
                    <Link to="/auth/iniciar-sesion">Iniciar sesion</Link>
                  </Button>

                  <Button variant="authButton">
                    <Link to="/auth/registrarse">Registrarse</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

interface CartProps {
  cartOpen: boolean
  setCartOpen: Function
}
function Cart({ cartOpen, setCartOpen }: CartProps) {
  const { authUser } = useAuthContext()
  const products = useCartStore(
    (state) =>
      state.cart.find((product) => product.userId === authUser?.user.id)
        ?.products || []
  )
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-start z-50 transition-all duration-300 ${
        cartOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setCartOpen(false)}
    >
      <div
        className={`bg-yellow-50 w-[320px] h-full p-6 flex flex-col gap-6 transition-all duration-300 absolute ${
          cartOpen ? "-right-0" : "-right-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row items-center justify-between">
          <button
            type="button"
            className="self-start"
            onClick={() => setCartOpen(false)}
          >
            <Icon
              className="text-light"
              icon="material-symbols:close"
              width="24"
              height="24"
            />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {products &&
            products.map((product: CartProducts) => (
              <li key={crypto.randomUUID()}>{product.product.name}</li>
            ))}
        </div>
      </div>
    </div>
  )
}
