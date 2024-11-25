import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Tag, Users, Box, LogOut, LucideIcon, ChevronLeft } from 'lucide-react';

interface MenuItem {
  title: string;
  href: string;
  Icon: LucideIcon;
}

const menuItems: MenuItem[] = [
  { title: 'Productos', href: '/admin/productos', Icon: Box },
  { title: 'Categorías', href: '/admin/categorias', Icon: Tag },
  { title: 'Órdenes', href: '/admin/ordenes-de-compra', Icon: ShoppingCart },
  { title: 'Usuarios', href: '/admin/usuarios', Icon: Users },
];

import { useSidebarStore } from "@/store/ui.store";

export const SidebarMobile = () => {
  const { isMobileSidebarOpen, toggleSidebar } = useSidebarStore();

  return (
    <div
      className={`lg:hidden absolute bg-gray-900 h-screen flex flex-col justify-between text-white transition-all duration-300 ease-in-out overflow-hidden ${isMobileSidebarOpen ? 'w-64 p-4' : 'w-0 py-4'}`}
    >

      {/* Navbar Items y Profile */}
      <div
        className={`flex flex-col gap-20 transition-opacity duration-300 ease-in-out ${isMobileSidebarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'}`}
      >
        {/* Profile */}
        <div className="flex flex-col gap-2 mt-16">
          {/* Intro */}
          <div>
            <h1 className={`text-lg md:text-2xl font-bold text-white text-nowrap ${isMobileSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
              Enpatados
            </h1>

            <span className={`text-blue-500 text-sm font-bold text-nowrap ${isMobileSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Panel administrativo</span>
          </div>

          {/* User */}
          <div className="flex flex-col">
            <p className={`text-slate-500 text-nowrap ${isMobileSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Bienvenido,</p>
            <div className="inline-flex space-x-2 items-center">
              {/* <img className="rounded-full w-8 h-8" src="/logo.webp" alt="" /> */}
              <span className={`text-sm md:text-base font-bold text-nowrap ${isMobileSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
                Santiago Herrera
              </span>
            </div>
          </div>
        </div>

        <nav className='flex flex-col gap-3'>
          {menuItems.map((item) => (
            <NavLink
              to={item.href} 
              key={item.title}
              className={({ isActive }) => 
                `${"w-full flex flex-row gap-3 items-center p-2 lg:border-b rounded transition-colors ease-linear duration-700"} 
                ${isActive ? "bg-blue-800" : "hover:bg-white/5"}`
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
      <div className={`flex flex-col justify-center gap-4 transition-opacity duration-300 ease-in-out ${isMobileSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>
        {/* Go Home */}
        <Link to="/" className='flex gap-1 justify-center items-center text-nowrap' onClick={toggleSidebar}>
          <ChevronLeft />
          <span className="text-lg font-bold">Volver al Inicio</span>
        </Link>

        {/* Logout */}
        <button className='flex gap-1 mx-auto items-center text-nowrap' onClick={toggleSidebar}>
          <LogOut />
          Cerrar sesion
        </button>
      </div>
    </div>
  );
};