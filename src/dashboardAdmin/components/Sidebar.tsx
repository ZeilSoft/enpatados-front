import { Link } from 'react-router-dom';
import { SidebarItem } from './SidebarItem';
import { ShoppingCart, Tag, Users, LucideIcon, Box, LogOut, ChevronLeft } from 'lucide-react';

interface MenuItem {
  title    : string;
  subTitle : string;
  href     : string;
  Icon     : LucideIcon;
}

const menuItems: MenuItem[] = [
  { title: 'Productos', subTitle: 'Gestión de inventario', href: '/admin/productos', Icon: Box },
  { title: 'Categorias', subTitle: 'Clasificación de productos', href: '/admin/categorias', Icon: Tag },
  { title: 'Ordenes de compra', subTitle: 'Estados de pago', href: '/admin/ordenes-de-compra', Icon: ShoppingCart },
  { title: 'Usuarios', subTitle: 'Lista de usuarios', href: '/admin/usuarios', Icon: Users },
];

export const Sidebar = () => {

  return (
    <div className="hidden bg-gray-900 p-6 h-screen relative lg:flex flex-col justify-between z-10 text-slate-300 w-80 left-0">

      {/* Intro & Profile */}
      <div className="flex flex-col gap-2">

        {/* Intro */}
        <div>
          <h1 className="text-lg md:text-2xl font-bold text-white">
            Enpatados
          </h1>

          <span className="text-blue-500 text-sm font-bold">Panel administrativo</span>
          {/* <p className="text-slate-500 text-sm">Manejador de estados simple pero poderoso.</p> */}
        </div>

        {/* Profile */}
        <div className="flex flex-col"> 
          <p className="text-slate-500">Bienvenido,</p>
          <div className="inline-flex space-x-2 items-center">
            {/* <img className="rounded-full w-8 h-8" src="/logo.webp" alt="" /> */}
            <span className="text-sm md:text-base font-bold">
              Santiago Herrera
            </span>
          </div>
        </div>
      </div>

      {/* Menu Items */ }
      <nav className="w-full flex flex-col">
        {
          menuItems.map( item =>(
            <SidebarItem key={item.href} {...item} />
          ) )
        }
      </nav>

      <div className='flex flex-col justify-center gap-4'>
        {/* Go Home */}
        <Link className='flex gap-1 justify-center items-center' to="/">
          <ChevronLeft />
          <span className="text-lg font-bold">Volver al Inicio</span>
        </Link>

        {/* Logout */}
        <button className='flex gap-1 mx-auto items-center'>
          <LogOut />
          Cerrar sesion
        </button>
      </div>
    </div>
  );
};