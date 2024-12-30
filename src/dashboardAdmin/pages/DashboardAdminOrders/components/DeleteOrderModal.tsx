import { Button } from "@/components/ui/button"
import { deleteOrder } from "@/dashboardAdmin/services/orderService"
import { useModalStore } from "@/store/ui.store"
import { useMutation } from "@tanstack/react-query"

interface DeleteOrderModalProps {
  id: number
  refetch: Function
}
export const DeleteOrderModal: React.FC<DeleteOrderModalProps> = ({ id, refetch }) => {
  const { closeModal } = useModalStore()

  const { mutate } = useMutation({
    mutationKey: ["deleteProduct"],
    mutationFn: async () => {
      await deleteOrder(id)
    },
    onSuccess: () => {
      refetch()
      closeModal()
    },
  })

  return (
    <div className="flex flex-col gap-4">
      <p>
        ¿Estás seguro de que deseas eliminar esta orden? "
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
