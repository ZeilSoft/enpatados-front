import React from "react"
import { Button } from "@/components/ui/button"
import { useModalStore } from "@/store/ui.store"
import { useMutation } from "@tanstack/react-query"
import { deleteSubCategory } from "@/enpatados/services/subCategoryService"

interface DeleteSubcategoryModalProps {
  id: number
  refetch: Function
}

export const DeleteSubcategoryModal: React.FC<DeleteSubcategoryModalProps> = ({
  id,
  refetch,
}) => {
  const { closeModal } = useModalStore()

  const { mutate } = useMutation({
    mutationKey: ["deleteSubCategory"],
    mutationFn: async () => {
      await deleteSubCategory(id)
    },
    onSuccess: () => {
      refetch()
      closeModal()
    },
  })
  return (
    <div className="flex flex-col gap-4">
      <p>¿Estás seguro de que deseas eliminar esta subcategoria"?</p>
      <div className="flex justify-end gap-2">
        <Button variant="goBack" onClick={closeModal}>
          Cancelar
        </Button>
        <Button variant="delete" onClick={() => mutate()}>
          Eliminar
        </Button>
      </div>
    </div>
  )
}
