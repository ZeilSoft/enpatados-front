import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useModalStore } from '@/store/ui.store';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface EditProductModalProps {
  product: {
    name: string;
    price: string;
    category: string;
    subcategory?: string;
    stock: string;
  };
}

export const EditProductModal: React.FC<EditProductModalProps> = ({ product }) => {
  const { closeModal } = useModalStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <form className="flex flex-col gap-4 text-white" onSubmit={handleSubmit}>
      <div className='flex flex-col gap-2'>
        <Input className='bg-[#334155] ring-white border border-[#455166]' placeholder="Nombre del producto" defaultValue={product.name} />

        <Input className='bg-[#334155] ring-white border border-[#455166]' placeholder="Precio" defaultValue={product.price} />

        <Select>
          <SelectTrigger className="bg-[#334155] ring-white border border-[#455166] text-white rounded-md py-2 px-3 focus:ring-offset-0 focus-visible:ring-2 focus:ring-white">
            <SelectValue placeholder="Seleccione categoría" />
          </SelectTrigger>
          <SelectContent className="bg-[#334155] text-white z-[12222]">
            <SelectGroup onMouseDown={(e) => e.stopPropagation()}>
              <SelectItem value="medias">Medias</SelectItem>
              <SelectItem value="anteojos">Anteojos</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

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

        <Input className='bg-[#334155] ring-white border border-[#455166]' placeholder="Stock" defaultValue={product.stock} />
      </div>
      <Button type="submit" variant="goBack">Guardar cambios</Button>
    </form>
  );
};