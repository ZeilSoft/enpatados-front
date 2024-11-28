import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { SidebarMobile } from "../components/SidebarMobile";
import { SidebarMobileToggleButton } from "../components/SidebarMobileToggleButton";

export const DashboardAdminLayout = () => {

  return (
    <div className="bg-[#111827] w-screen h-screen antialiased overflow-hidden text-black font-rubik">
      <div className="flex flex-row relative w-full h-full">
        <Sidebar />
        <SidebarMobile />

        <div className="w-full overflow-y-auto">
          <SidebarMobileToggleButton />

          <Outlet />
        </div>
      </div>
    </div>
  );
};