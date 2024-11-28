import { create } from 'zustand';

interface SidebarState {
  isMobileSidebarOpen : boolean;
  toggleSidebar       : () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isMobileSidebarOpen : true,
  toggleSidebar       : () => set((state) => ({ isMobileSidebarOpen: !state.isMobileSidebarOpen })),
}));

interface ModalState {
  isModalOpen  : boolean;
  modalContent : React.ReactNode | null;
  modalTitle   : string;
  openModal    : (title?: string, content?: React.ReactNode) => void;
  closeModal   : () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen  : false,
  modalContent : null,
  modalTitle   : '',
  openModal    : (title, content) => set({ isModalOpen: true, modalContent: content, modalTitle: title }),
  closeModal   : () => set({ isModalOpen: false, modalContent: null, modalTitle: '' }),
}));