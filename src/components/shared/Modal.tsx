import React, { useEffect, useCallback, useRef } from 'react';
import { X } from 'lucide-react';
import { useModalStore } from '@/store/ui.store';

interface ModalProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ title, children, className }) => {
  const { isModalOpen, closeModal } = useModalStore();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    closeModal();
  }, [closeModal]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen, handleClose]);

  return (      
    <div
      className={`fixed inset-0 z-[11111] flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none transition-opacity duration-300 ease-in-out px-6 ${
        isModalOpen ? 'opacity-100 pointer-events-auto backdrop-blur-sm' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Fondo opaco */}
      <div className={`fixed inset-0 bg-black opacity-50 transition-opacity duration-300 ease-in-out ${isModalOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'}`} />

      <div
        ref={modalRef}
        className={`relative w-full flex flex-col gap-4 max-w-[425px] p-6 mx-auto rounded-lg transition-all duration-300 ease-in-out transform ${
          isModalOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        } ${className}`}
      >
        <h3 className="text-lg text-center font-semibold">{title}</h3>
        <button
          className="absolute right-[13px] top-[14px]"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};