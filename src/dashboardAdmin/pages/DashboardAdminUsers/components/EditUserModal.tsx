import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useModalStore } from '@/store/ui.store';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface EditUserModalProps {
  user: {
    name: string;
    surname: string;
    email: string;
    rol: string;
  };
}

export const EditUserModal: React.FC<EditUserModalProps> = ({ user }) => {
  const { closeModal } = useModalStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <form className="flex flex-col gap-4 text-white" onSubmit={handleSubmit}>
      <div className='flex flex-col gap-2'>
        <Input className='bg-[#334155] ring-white border border-[#455166]' placeholder="Nombre" defaultValue={user.name} />

        <Input className='bg-[#334155] ring-white border border-[#455166]' placeholder="Apellido" defaultValue={user.surname} />

        <Input className='bg-[#334155] ring-white border border-[#455166]' placeholder="Email" defaultValue={user.email} />

        <Select>
          <SelectTrigger className="bg-[#334155] ring-white border border-[#455166] text-white rounded-md py-2 px-3 focus:ring-offset-0 focus-visible:ring-2 focus:ring-white">
            <SelectValue placeholder="Seleccione un rol" />
          </SelectTrigger>
          <SelectContent className="bg-[#334155] text-white z-[12222]">
            <SelectGroup onMouseDown={(e) => e.stopPropagation()}>
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" variant="goBack">Guardar cambios</Button>
    </form>
  );
};