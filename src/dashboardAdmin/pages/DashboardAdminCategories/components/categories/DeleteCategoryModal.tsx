import React from "react"
import { Button } from "@/components/ui/button"
import { useModalStore } from "@/store/ui.store"
import { deleteCategory } from "@/enpatados/services/categoryService"
import { useMutation } from "@tanstack/react-query"

interface DeleteCategoryModalProps {
  id: number
  refetch: Function
  refetchSubCategories: Function
}

export const DeleteCategoryModal: React.FC<DeleteCategoryModalProps> = ({
  id,
  refetch,
  refetchSubCategories
}) => {
  const { closeModal } = useModalStore()

  const { mutate } = useMutation({
    mutationKey: ["deleteCategory"],
    mutationFn: async () => {
      await deleteCategory(id)
    },
    onSuccess: () => {
      refetch()
      refetchSubCategories()
      closeModal()
    },
  })

  return (
    <div className="flex flex-col gap-4">
      <p>¿Estás seguro de que deseas eliminar esta categoria"?</p>
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
