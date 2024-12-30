import { Link, NavLink } from "react-router-dom"
import {
  ShoppingCart,
  Tag,
  Users,
  Box,
  LogOut,
  LucideIcon,
  ChevronLeft,
} from "lucide-react"

interface MenuItem {
  title: string
  href: string
  Icon: LucideIcon
}

const menuItems: MenuItem[] = [
  { title: "Productos", href: "/admin/productos", Icon: Box },
  { title: "Clasificación", href: "/admin/categorias", Icon: Tag },
  { title: "Órdenes", href: "/admin/ordenes-de-compra", Icon: ShoppingCart },
  { title: "Usuarios", href: "/admin/usuarios", Icon: Users },
]

import { useSidebarStore } from "@/store/ui.store"
import { Button } from "@/components/ui/button"
import { useAuthContext } from "@/auth/context/auth-context"
import { useLogout } from "@/auth/hooks/useLogout"

export const SidebarMobile = () => {
  const { isMobileSidebarOpen, toggleSidebar } = useSidebarStore()
  const { authUser } = useAuthContext()
  const { logOut } = useLogout()
  function handleLogOut (){
    logOut()
    window.location.href = "/auth/iniciar-sesion"
  }
  return (
    <div
      className={`lg:hidden z-[8888] absolute bg-[#111827] h-screen flex flex-col justify-between text-white transition-all duration-300 ease-in-out overflow-hidden ${
        isMobileSidebarOpen ? "w-64 p-4" : "w-0 py-4"
      }`}
    >
      {/* Navbar Items y Profile */}
      <div
        className={`flex flex-col gap-20 transition-opacity duration-300 ease-in-out ${
          isMobileSidebarOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-100%]"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col gap-2 mt-16">
          {/* Intro */}
          <div>
            <h1
              className={`text-lg md:text-2xl font-bold text-white text-nowrap ${
                isMobileSidebarOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              Enpatados
            </h1>

            <span
              className={`text-blue-500 text-sm font-bold text-nowrap ${
                isMobileSidebarOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              Panel administrativo
            </span>
          </div>

          {/* User */}
          <div className="flex flex-col">
            <p
              className={`text-slate-500 text-nowrap ${
                isMobileSidebarOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              Bienvenido,
            </p>
            <div className="inline-flex space-x-2 items-center">
              {/* <img className="rounded-full w-8 h-8" src="/logo.webp" alt="" /> */}
              <span
                className={`text-sm md:text-base font-bold text-nowrap ${
                  isMobileSidebarOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                {authUser?.user.email}
              </span>
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <NavLink
              to={item.href}
              key={item.title}
              className={({ isActive }) =>
                `${"w-full flex flex-row gap-3 items-center p-2 lg:border-b rounded transition-colors ease-linear duration-700"} 
                ${isActive ? "bg-[#252D3B]" : "hover:bg-white/5"}`
              }
              onClick={toggleSidebar}
            >
              <item.Icon />
              {isMobileSidebarOpen && <span>{item.title}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Go Home and Log out */}
      <div
        className={`flex flex-col justify-center gap-4 transition-opacity duration-300 ease-in-out ${
          isMobileSidebarOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Go Home */}
        <Link
          className="flex gap-1 items-center justify-center whitespace-nowrap text-sm font-medium rounded-md transition-colors hover:bg-[#111827] h-10 px-4 py-2 border border-[#334155] focus-visible:outline-none focus-visible:ring-2 focus:ring-white"
          to="/"
        >
          <ChevronLeft />
          <span className="">Volver al Inicio</span>
        </Link>

        {/* Logout */}
        <Button variant="logOut" className="flex flex-row gap-2 items-center" onClick={handleLogOut}>
          <LogOut />
          Cerrar sesion
        </Button>
      </div>
    </div>
  )
}
