import { useSidebarStore } from "@/store/ui.store"
import { ChevronRight } from "lucide-react";

export const SidebarMobileToggleButton = () => {
  const { isMobileSidebarOpen, toggleSidebar } = useSidebarStore();

  return (
    <button
      className={`lg:hidden absolute p-2 rounded-full z-[9999] top-4 left-4 shadow-lg focus:outline-none ${
        isMobileSidebarOpen ? 'rotate-0 bg-[#252D3B]' : 'rotate-180 bg-[#111827]'
      } transition-transform`}
      onClick={toggleSidebar}
    >
      <ChevronRight size={20} className="text-white" />
    </button>
  )
}