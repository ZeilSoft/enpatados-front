import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";

import { useModalHandlers } from "@/dashboardAdmin/hooks/useModalHandlers ";
import { useState } from "react";

export const UsersTable = () => {

  const [users, setUsers] = useState([
    { id: 1, name: "Santiago", surname: "Herrera", email: "santiago@gmail.com", rol: "User" },
    { id: 2, name: "Gabriel", surname: "Nievas", email: "gabriel@gmail.com", rol: "Admin" },
    { id: 3, name: "Leandro", surname: "Eraso", email: "leandro@gmail.com", rol: "Admin" },
  ]);

  const [usersSearchTerm, setUsersSearchTerm] = useState("");

  const filteredUsers = users.filter(subcategory =>
    subcategory.name.toLowerCase().includes(usersSearchTerm.toLowerCase())
  );

  const { handleCreateUser, handleEditUser, handleDeleteUser } = useModalHandlers();

  return (
    <div>
      <div className="px-4 lg:px-6 max-w-[1920px] 4xl:w-[1920px] 4xl:mx-auto">
        <div className="flex flex-col gap-4 bg-[#252D3B] p-4 rounded-md border border-[#334155]">

          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              placeholder="Buscar usuario"
              value={usersSearchTerm}
              onChange={(e) => setUsersSearchTerm(e.target.value)}
              className="border border-[#334155] bg-[#252D3B] focus-visible:ring-2 focus:ring-white focus:outline-none text-white"
            />
            <Button variant="productActions" onClick={handleCreateUser}>
              Crear Usuario
            </Button>
          </div>

          {/* Borde externo de la tabla */}
          <div className="border border-[#334155] rounded-md bg-[#252D3B]">
            <Table className="rounded-md overflow-hidden border border-[#334155]">
              <TableHeader>
                <TableRow>
                  <TableHead className="border border-[#334155]">Nombre</TableHead>
                  <TableHead className="border border-[#334155]">Apellido</TableHead>
                  <TableHead className="border border-[#334155]">Emails</TableHead>
                  <TableHead className="border border-[#334155]">Rol</TableHead>
                  <TableHead className="border border-[#334155] lg:text-center">Acciones</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map(user => (
                    <TableRow key={user.id} className="hover:">
                      <TableCell className="border border-[#334155]">{user.name}</TableCell>
                      <TableCell className="border border-[#334155]">{user.surname}</TableCell>
                      <TableCell className="border border-[#334155]">{user.email}</TableCell>
                      <TableCell className="border border-[#334155]">{user.rol}</TableCell>
                      <TableCell className="border border-[#334155]">
                        <div className="flex flex-row gap-4 justify-center">
                          <Trash2 className="cursor-pointer" onClick={() => handleDeleteUser(user.name)} />
                          <Pencil className="cursor-pointer" onClick={() => handleEditUser(user)} />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-[#F15656]">No se encontraron usuarios.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}