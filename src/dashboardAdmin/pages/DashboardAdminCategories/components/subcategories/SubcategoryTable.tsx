import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";

import { useModalHandlers } from "@/dashboardAdmin/hooks/useModalHandlers ";
import { useState } from "react";

export const SubcategoryTable = () => {

  const [subcategories, setSubcategories] = useState([
    { id: 1, name: "Soquetes", category: "Medias" },
    { id: 2, name: "3/4", category: "Medias" },
  ]);

  const [subcategorySearchTerm, setSubcategorySearchTerm] = useState("");

  const filteredSubcategories = subcategories.filter(subcategory =>
    subcategory.name.toLowerCase().includes(subcategorySearchTerm.toLowerCase())
  );

  const { handleCreateSubcategory, handleEditSubcategory, handleDeleteSubcategory } = useModalHandlers();

  return (
    <div>
      <div className="px-4 lg:px-6 max-w-[1920px] 4xl:w-[1920px] 4xl:mx-auto">
        <div className="flex flex-col gap-4 bg-[#252D3B] p-4 rounded-md border border-[#334155]">
          <h1 className="text-2xl font-bold">Subcategorias</h1>

          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              placeholder="Buscar subcategoría"
              value={subcategorySearchTerm}
              onChange={(e) => setSubcategorySearchTerm(e.target.value)}
              className="border border-[#334155] bg-[#252D3B] focus-visible:ring-2 focus:ring-white focus:outline-none text-white"
            />
            <Button variant="productActions" onClick={handleCreateSubcategory}>
              Crear Subcategoria
            </Button>
          </div>

          {/* Borde externo de la tabla */}
          <div className="border border-[#334155] rounded-md bg-[#252D3B]">
            <Table className="rounded-md overflow-hidden border border-[#334155]">
              <TableHeader>
                <TableRow>
                  <TableHead className="border border-[#334155]">Nombre</TableHead>
                  <TableHead className="border border-[#334155]">Categoria</TableHead>
                  <TableHead className="border border-[#334155] lg:text-center">Acciones</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredSubcategories.length > 0 ? (
                  filteredSubcategories.map(subcategory => (
                    <TableRow key={subcategory.id} className="hover:">
                      <TableCell className="border border-[#334155]">{subcategory.name}</TableCell>
                      <TableCell className="border border-[#334155]">{subcategory.category}</TableCell>
                      <TableCell className="border border-[#334155]">
                        <div className="flex flex-row gap-4 justify-center">
                          <Trash2 className="cursor-pointer" onClick={() => handleDeleteSubcategory(subcategory.name)} />
                          <Pencil className="cursor-pointer" onClick={() => handleEditSubcategory(subcategory)} />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center border border-[#334155]">No se encontraron categorías.</TableCell>
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
