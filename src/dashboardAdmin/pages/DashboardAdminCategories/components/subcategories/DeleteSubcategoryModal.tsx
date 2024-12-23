import React from 'react';
import { Button } from "@/components/ui/button";
import { useModalStore } from '@/store/ui.store';

interface DeleteSubcategoryModalProps {
  subcategoryName: string;
}

export const DeleteSubcategoryModal: React.FC<DeleteSubcategoryModalProps> = ({ subcategoryName }) => {
  const { closeModal } = useModalStore();

  const handleDelete = () => {
    closeModal();
  };

  return (
    <div className="flex flex-col gap-4">
      <p>¿Estás seguro de que deseas eliminar la subcategoria "<span className='font-bold'>{subcategoryName}</span>"?</p>
      <div className="flex justify-end gap-2">
        <Button variant="goBack" onClick={closeModal}>Cancelar</Button>
        <Button variant="delete" onClick={handleDelete}>Eliminar</Button>
      </div>
    </div>
  );
};