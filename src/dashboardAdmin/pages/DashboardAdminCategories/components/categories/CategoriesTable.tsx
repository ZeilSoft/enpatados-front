import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Pencil, Trash2 } from "lucide-react";

import { useState } from "react";

import { useModalHandlers } from "@/dashboardAdmin/hooks/useModalHandlers ";

export const CategoriesTable = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Medias",
      description: "Medias con diseño minimalista y moderno",
      icon: <Icon icon="icon-park-outline:socks" width="24" height="24" />,
      subcategories: [
        { id: 1, name: "Soquetes" },
        { id: 2, name: "3/4" },
      ],
    },
    {
      id: 2,
      name: "Anteojos",
      description: "Anteojos con diseño moderno y minimalista",
      icon: <Icon icon="solar:glasses-outline" width="24" height="24" />,
      subcategories: [],
    },
  ]);

  const [categorySearchTerm, setCategorySearchTerm] = useState("");

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(categorySearchTerm.toLowerCase())
  );

  const { handleCreateCategory, handleDeleteCategory, handleEditCategory } = useModalHandlers();

  return (
    <div className="px-4 lg:px-6 max-w-[1920px] 4xl:w-[1920px] 4xl:mx-auto">
      <div className="flex flex-col gap-4 bg-[#252D3B] p-4 rounded-md border border-[#334155]">
        <h1 className="text-2xl font-bold">Categorias</h1>

        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            placeholder="Buscar categoría"
            value={categorySearchTerm}
            onChange={(e) => setCategorySearchTerm(e.target.value)}
            className="border border-[#334155] bg-[#252D3B] focus-visible:ring-2 focus:ring-white focus:outline-none text-white"
          />
          <Button variant="productActions" onClick={handleCreateCategory}>
            Crear Categoría
          </Button>
        </div>

        {/* Tabla */} {/* Borde externo de la tabla */}
        <div className="border border-[#334155] rounded-md bg-[#252D3B]">
          <Table className="rounded-md overflow-hidden border border-[#334155]">
            <TableHeader>
              <TableRow>
                <TableHead className="border border-[#334155] md:text-center md:w-[70.5px]">Icono</TableHead>
                <TableHead className="border border-[#334155]">Nombre</TableHead>
                <TableHead className="border border-[#334155]">Subcategoria</TableHead>
                <TableHead className="border border-[#334155]">Descripción</TableHead>
                <TableHead className="border border-[#334155] lg:text-center">Acciones</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredCategories.length > 0 ? (
                filteredCategories.map(category => (
                  <TableRow key={category.id} className="hover:">
                    <TableCell className="border border-[#334155] text-center">
                      <div className="flex justify-center items-center">{category.icon}</div>
                    </TableCell>
                    <TableCell className="border border-[#334155]">{category.name}</TableCell>
                    <TableCell className="border border-[#334155]">
                      {category.subcategories.map(subcategory => subcategory.name).join(", ")}
                    </TableCell>
                    <TableCell className="border border-[#334155]">{category.description}</TableCell>
                    <TableCell className="border border-[#334155]">
                      <div className="flex flex-row gap-4 justify-center">
                        <Trash2 className="cursor-pointer" onClick={() => handleDeleteCategory(category.name)} />
                        <Pencil className="cursor-pointer" onClick={() => handleEditCategory(category)} />
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
  )
}
