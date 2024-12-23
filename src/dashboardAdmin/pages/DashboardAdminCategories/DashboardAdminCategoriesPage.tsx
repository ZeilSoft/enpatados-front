import { useModalStore } from "@/store/ui.store"

import { Modal } from "@/components/shared/Modal"
import { CategoriesTable } from "./components/categories/CategoriesTable"
import { SubcategoryTable } from "./components/subcategories/SubcategoryTable"
import { getCategories } from "@/enpatados/services/categoryService"
import { useQuery } from "@tanstack/react-query"
import { getSubCategories } from "@/enpatados/services/subCategoryService"

export const DashboardAdminCategoriesPage = () => {
  const { modalContent, modalTitle } = useModalStore()

  const {
    data: categories,
    refetch: refetchCategories,
    error: errorCategories,
    isPending: isPendingCategories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
    retry: 0,
  })

  const {
    data: subcategories,
    refetch: refetchSubCategories,
    error: errorSubCategories,
    isPending: isPendingSubCategories,
  } = useQuery({
    queryKey: ["subcategories"],
    queryFn: getSubCategories,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
    retry: 0,
  })
  console.log(subcategories);
  

  return (
    <div className="flex flex-col gap-6 text-white pb-4 lg:pb-6">
      {/* Header */}
      <div className="sticky top-0 p-4 lg:px-6 lg:py-6 flex flex-col border-b border-[#334155] gap-6 z-[7777] bg-[#252D3B] shadow">
        <h1 className="text-4xl font-bold text-center break-words">
          CATEGORÍAS y SUBCATEGORIAS
        </h1>
      </div>
      {isPendingCategories ? (
        "Cargando..."
      ) : (
        <>
          {errorCategories ? (
            "Error al buscar categorias"
          ) : (
            <CategoriesTable
              categories={categories}
              refetch={refetchCategories}
              refetchSubCategories={refetchSubCategories}
            />
          )}
        </>
      )}

      {isPendingSubCategories ? (
        "Cargando..."
      ) : (
        <>
          {errorSubCategories ? (
            "Error al buscar subcategorias"
          ) : (
            <SubcategoryTable
              subcategories={subcategories}
              refetch={refetchSubCategories}
            />
          )}
        </>
      )}

      {/* Renderiza el Modal con contenido dinámico */}
      <Modal className="bg-[#252D3B] p-2" title={modalTitle}>
        {modalContent}
      </Modal>
    </div>
  )
}
