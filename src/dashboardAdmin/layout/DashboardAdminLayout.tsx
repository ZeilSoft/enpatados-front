import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { SidebarMobile } from "../components/SidebarMobile";
import { SidebarMobileToggleButton } from "../components/SidebarMobileToggleButton";

export const DashboardAdminLayout = () => {

  return (
    <div className="bg-slate-200 overflow-y-visible overflow-x-hidden w-screen h-screen antialiased text-slate-900 selection:bg-blue-900 selection:text-white">
      <div className="flex flex-row relative w-screen">
        <Sidebar />

        <SidebarMobile />

        <div className="w-full p-4">
          <SidebarMobileToggleButton />

          <Outlet />
        </div>
      </div>
    </div>
  );
};