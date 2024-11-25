import { useSidebarStore } from "@/store/ui.store"
import { ChevronRight } from "lucide-react";

export const SidebarMobileToggleButton = () => {
  const { isMobileSidebarOpen, toggleSidebar } = useSidebarStore();

  return (
    <button
      className={`lg:hidden absolute bg-gray-800 p-2 rounded-full shadow-lg focus:outline-none ${
        isMobileSidebarOpen ? 'rotate-0' : 'rotate-180'
      } transition-transform`}
      onClick={toggleSidebar}
    >
      <ChevronRight size={20} className="text-white" />
    </button>
  )
}