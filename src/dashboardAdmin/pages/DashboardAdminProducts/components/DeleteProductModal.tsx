import React from 'react';
import { Button } from "@/components/ui/button";
import { useModalStore } from '@/store/ui.store';

interface DeleteProductModalProps {
  productName: string;
}

export const DeleteProductModal: React.FC<DeleteProductModalProps> = ({ productName }) => {
  const { closeModal } = useModalStore();

  const handleDelete = () => {
    closeModal();
  };

  return (
    <div className="flex flex-col gap-4">
      <p>¿Estás seguro de que deseas eliminar el producto "<span className='font-bold'>{productName}</span>"?</p>
      <div className="flex justify-end gap-2">
        <Button variant="goBack" onClick={closeModal}>Cancelar</Button>
        <Button variant="delete" onClick={handleDelete}>Eliminar</Button>
      </div>
    </div>
  );
};