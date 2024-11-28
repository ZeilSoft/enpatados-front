import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useModalStore } from '@/store/ui.store';

export const CreateSubcategoryModal: React.FC = () => {
  const { closeModal } = useModalStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <form className="flex flex-col gap-4 text-white" onSubmit={handleSubmit}>
      <div className='flex flex-col gap-2'>
        <Input className='bg-[#334155] ring-white border border-[#455166]' placeholder="Nombre de la subcategoria" />
      </div>
      <Button className='border border-[#455166]' type="submit" variant="productActions">Crear</Button>
    </form>
  );
};