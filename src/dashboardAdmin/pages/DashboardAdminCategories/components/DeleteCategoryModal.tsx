import React from 'react';
import { Button } from "@/components/ui/button";
import { useModalStore } from '@/store/ui.store';

interface DeleteCategoryModalProps {
  categoryName: string;
}

export const DeleteCategoryModal: React.FC<DeleteCategoryModalProps> = ({ categoryName }) => {
  const { closeModal } = useModalStore();

  const handleDelete = () => {
    closeModal();
  };

  return (
    <div className="flex flex-col gap-4">
      <p>¿Estás seguro de que deseas eliminar la categoria "<span className='font-bold'>{categoryName}</span>"?</p>
      <div className="flex justify-end gap-2">
        <Button variant="goBack" onClick={closeModal}>Cancelar</Button>
        <Button variant="delete" onClick={handleDelete}>Eliminar</Button>
      </div>
    </div>
  );
};