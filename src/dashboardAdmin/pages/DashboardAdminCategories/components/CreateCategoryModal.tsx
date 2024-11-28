import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { useModalStore } from '@/store/ui.store';

export const CreateCategoryModal: React.FC = () => {
  const { closeModal } = useModalStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <form className="flex flex-col gap-4 text-white" onSubmit={handleSubmit}>
      <div className='flex flex-col gap-2'>
        <Input className='bg-[#334155] ring-white border border-[#455166]' placeholder="Nombre de la categoria" />
        <Select>
          <SelectTrigger className="bg-[#334155] ring-white border border-[#455166] text-white rounded-md py-2 px-3 focus:ring-offset-0 focus-visible:ring-2 focus:ring-white">
            <SelectValue placeholder="Seleccione subcategoría" />
          </SelectTrigger>
          <SelectContent className="bg-[#334155] text-white z-[12222]">
            <SelectGroup onMouseDown={(e) => e.stopPropagation()}>
              <SelectItem value="soquetes">Soquetes</SelectItem>
              <SelectItem value="3/4">3/4</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button className='border border-[#455166]' type="submit" variant="productActions">Crear</Button>
    </form>
  );
};