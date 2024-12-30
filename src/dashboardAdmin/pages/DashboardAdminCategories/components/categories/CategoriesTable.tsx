import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Icon } from "@iconify/react/dist/iconify.js"
import { Pencil, Trash2 } from "lucide-react"

import { useState } from "react"

import { useModalHandlers } from "@/dashboardAdmin/hooks/useModalHandlers "
import { Category } from "@/enpatados/interfaces/Category"
import { useDebounce } from "use-debounce"

interface CategoriesTableProps {
  categories: Category[]
  refetch: Function
  refetchSubCategories: Function
}
export const CategoriesTable = ({
  categories,
  refetch,
  refetchSubCategories
}: CategoriesTableProps) => {
  const urlParams = new URLSearchParams(window.location.search)
  const [categorySearchTerm, setCategorySearchTerm] = useState(urlParams.get("categories") || "")
  const [value] = useDebounce(categorySearchTerm, 350)
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(value.toLowerCase())
  )
  const { handleCreateCategory, handleDeleteCategory, handleEditCategory } =
    useModalHandlers()

  return (
    <div className="px-4 lg:px-6 max-w-[1920px] 4xl:w-[1920px] 4xl:mx-auto">
      <div className="flex flex-col gap-4 bg-[#252D3B] p-4 rounded-md border border-[#334155]">
        <h1 className="text-2xl font-bold">Categorias</h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            placeholder="Buscar categoría"
            value={categorySearchTerm}
            onChange={(e) =>{
              urlParams.set("category", e.target.value)
              setCategorySearchTerm(e.target.value)
            }}
            className="border border-[#334155] bg-[#252D3B] focus-visible:ring-2 focus:ring-white focus:outline-none text-white"
          />
          <Button
            variant="productActions"
            onClick={() => handleCreateCategory(refetch)}
          >
            Crear Categoría
          </Button>
        </div>
        {/* Tabla */} {/* Borde externo de la tabla */}
        <div className="border border-[#334155] rounded-md bg-[#252D3B]">
          <Table className="rounded-md overflow-hidden border border-[#334155]">
            <TableHeader>
              <TableRow>
                <TableHead className="border border-[#334155] md:text-center md:w-[70.5px]">
                  Icono
                </TableHead>
                <TableHead className="border border-[#334155]">
                  Nombre
                </TableHead>
                {/* <TableHead className="border border-[#334155]">
                  Subcategoria
                </TableHead> */}
                <TableHead className="border border-[#334155]">
                  Descripción
                </TableHead>
                <TableHead className="border border-[#334155] lg:text-center">
                  Acciones
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (
                  <TableRow key={crypto.randomUUID()} className="hover:">
                    <TableCell className="border border-[#334155] text-center">
                      <div className="flex justify-center items-center">
                        <Icon icon={category.icon} />
                        {/* {category.icon} */}
                      </div>
                    </TableCell>
                    <TableCell className="border border-[#334155]">
                      {category.name}
                    </TableCell>
                   {/*  <TableCell className="border border-[#334155]">
                      {category.subcategories != undefined &&
                        category.subcategories
                          .map((subcategory) => subcategory.name)
                          .join(", ")}
                    </TableCell> */}
                    <TableCell className="border border-[#334155] max-w-[460px] truncate">
                      {category.description}
                    </TableCell>
                    <TableCell className="border border-[#334155]">
                      <div className="flex flex-row gap-4 justify-center">
                        <Trash2
                          className="cursor-pointer"
                          onClick={() =>
                            handleDeleteCategory(category.category_id, refetch, refetchSubCategories)
                          }
                        />
                        <Pencil
                          className="cursor-pointer"
                          onClick={() => handleEditCategory(category, refetch)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={3}
                    className="text-center border border-[#334155]"
                  >
                    No se encontraron categorías.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
