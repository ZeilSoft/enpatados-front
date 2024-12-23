import { useModalStore } from "@/store/ui.store";

import { Modal } from "@/components/shared/Modal";
import { CategoriesTable } from "./components/categories/CategoriesTable";
import { SubcategoryTable } from "./components/subcategories/SubcategoryTable";


export const DashboardAdminCategoriesPage = () => {
  const { modalContent, modalTitle } = useModalStore();

  return (
    <div className="flex flex-col gap-6 text-white pb-4 lg:pb-6">
      {/* Header */}
      <div className="sticky top-0 p-4 lg:px-6 lg:py-6 flex flex-col border-b border-[#334155] gap-6 z-[7777] bg-[#252D3B] shadow">
        <h1 className="text-4xl font-bold text-center break-words">CATEGORÍAS y SUBCATEGORIAS</h1>
      </div>

      <CategoriesTable />

      <SubcategoryTable />

      {/* Renderiza el Modal con contenido dinámico */}
      <Modal className="bg-[#252D3B] p-2" title={modalTitle}>
        {modalContent}
      </Modal>
    </div>
  );
};