import React from "react"
import { Button } from "@/components/ui/button"
import { useModalStore } from "@/store/ui.store"
import { useMutation } from "@tanstack/react-query"
import { deleteProduct } from "@/enpatados/services/productService"

interface DeleteProductModalProps {
  id: number
  name: string
  refetch: Function
}

export const DeleteProductModal: React.FC<DeleteProductModalProps> = ({
  id,
  name,
  refetch,
}) => {
  const { closeModal } = useModalStore()

  const { mutate } = useMutation({
    mutationKey: ["deleteProduct"],
    mutationFn: async () => {
      await deleteProduct(id)
    },
    onSuccess: () => {
      refetch()
      closeModal()
    },
  })

  return (
    <div className="flex flex-col gap-4">
      <p>
        ¿Estás seguro de que deseas eliminar el producto "
        <span className="font-bold">{name}</span>"?
      </p>
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
