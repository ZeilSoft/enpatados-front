
import { LucideIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface Props {
  href: string;
  Icon: LucideIcon;
  title: string;
  subTitle: string
}

export const SidebarItem = ({ href, Icon, title, subTitle }: Props) => {
  return (
    <NavLink
      className={({ isActive }) => 
        `${"w-full px-4 flex gap-3 items-center lg:border-b lg:border-[#334155] py-3 transition ease-linear duration-[150ms]"} 
        ${isActive ? "bg-[#111827]" : "hover:bg-[#1D2432]"}`
      }
      key={href}
      to={href}
    >
      <Icon />
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{ title }</span>
        <span className="text-sm text-white/50 hidden md:block">{ subTitle }</span>
      </div>
    </NavLink>
  );
}