import { Link } from "react-router-dom"
import { SidebarItem } from "./SidebarItem"
import {
  ShoppingCart,
  Tag,
  Users,
  LucideIcon,
  Box,
  LogOut,
  ChevronLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuthContext } from "@/auth/context/auth-context"

interface MenuItem {
  title: string
  subTitle: string
  href: string
  Icon: LucideIcon
}

const menuItems: MenuItem[] = [
  {
    title: "Productos",
    subTitle: "Gestión de inventario",
    href: "/admin/productos",
    Icon: Box,
  },
  {
    title: "Clasificación",
    subTitle: "Administrar categorias",
    href: "/admin/categorias",
    Icon: Tag,
  },
  {
    title: "Ordenes de compra",
    subTitle: "Estados de pago",
    href: "/admin/ordenes-de-compra",
    Icon: ShoppingCart,
  },
  {
    title: "Usuarios",
    subTitle: "Lista de usuarios",
    href: "/admin/usuarios",
    Icon: Users,
  },
]

export const Sidebar = () => {
  const { authUser } = useAuthContext()
  return (
    <div className="hidden lg:border-r lg:border-[#334155] bg-[#252D3B] h-screen relative lg:flex flex-col justify-between z-[8888] text-slate-300 w-80 left-0">
      {/* Intro & Profile */}
      <div className="flex flex-col gap-2 pt-4 px-4">
        {/* Intro */}
        <div>
          <h1 className="text-lg md:text-2xl font-bold text-white">
            Enpatados
          </h1>

          <span className="text-blue-500 text-sm font-bold">
            Panel administrativo
          </span>
          {/* <p className="text-slate-500 text-sm">Manejador de estados simple pero poderoso.</p> */}
        </div>

        {/* Profile */}
        <div className="flex flex-col">
          <p className="text-slate-500">Bienvenido,</p>
          <div className="inline-flex space-x-2 items-center">
            {/* <img className="rounded-full w-8 h-8" src="/logo.webp" alt="" /> */}
            <span className="text-sm md:text-base font-bold">
              {authUser?.user.email}
            </span>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="w-full flex flex-col">
        {menuItems.map((item) => (
          <SidebarItem key={item.href} {...item} />
        ))}
      </nav>

      {/* Go back & Logout */}
      <div className="flex flex-col justify-center gap-2 px-4 pb-4">
        {/* Go Home */}
        <Link
          className="flex gap-1 items-center justify-center whitespace-nowrap text-sm font-medium rounded-md transition-colors hover:bg-[#111827] h-10 px-4 py-2 border border-[#334155] focus-visible:outline-none focus-visible:ring-2 focus:ring-white"
          to="/"
        >
          <ChevronLeft />
          <span className="">Volver al Inicio</span>
        </Link>

        {/* Logout */}
        <Button variant="logOut" className="flex flex-row gap-2 items-center">
          <LogOut />
          Cerrar sesion
        </Button>
      </div>
    </div>
  )
}
