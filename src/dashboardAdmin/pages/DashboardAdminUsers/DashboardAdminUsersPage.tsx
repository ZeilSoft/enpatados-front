import { useModalStore } from "@/store/ui.store";

import { Modal } from "@/components/shared/Modal";
import { UsersTable } from "./components/UsersTable";


export const DashboardAdminUsersPage = () => {
  const { modalContent, modalTitle } = useModalStore();

  return (
    <div className="flex flex-col gap-6 text-white pb-4 lg:pb-6">
      {/* Header */}
      <div className="sticky top-0 p-4 lg:px-6 lg:py-6 flex flex-col border-b border-[#334155] gap-6 z-[7777] bg-[#252D3B] shadow">
        <h1 className="text-4xl font-bold text-center break-words">USUARIOS</h1>
      </div>

      <UsersTable />

      {/* Renderiza el Modal con contenido dinámico */}
      <Modal className="bg-[#252D3B] p-2" title={modalTitle}>
        {modalContent}
      </Modal>
    </div>
  );
};