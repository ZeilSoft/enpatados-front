import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { updateOrder } from "@/dashboardAdmin/services/orderService"
import { updateOrderSchema } from "@/dashboardAdmin/utils/schemas/updateOrder"
import { Order } from "@/enpatados/interfaces/Order"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { useFormik } from "formik"
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface UpdateOrderModalProps {
  order: Order
  refetch: Function
}
export const UpdateOrderModal: React.FC<UpdateOrderModalProps> = ({
  order,
  refetch,
}) => {
  const [success, setSuccess] = useState(false)

  const { handleSubmit, errors, touched, values, resetForm } = useFormik({
    initialValues: {
      status: order.status,
    },
    validationSchema: updateOrderSchema,
    onSubmit: () => {
      mutate()
    },
  })

  const { mutate, error } = useMutation({
    mutationKey: ["updateOrder"],
    mutationFn: async () => {
      await updateOrder(values.status, order.order_id)
    },
    onSuccess: () => {
      setSuccess(true)
      resetForm()
      refetch()
    },
  })

  return (
    <form className="flex flex-col gap-4 text-white" onSubmit={handleSubmit}>
      {success ? (
        <div className="flex flex-col gap-4">
          <h1 className="text-white">Producto editado con éxito</h1>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2">
            <Label className="text-sm">Nombre del producto</Label>
            <Select
              defaultValue={order.status}
              onValueChange={(value) =>
                value == "pendiente"
                  ? (values.status = "pendiente")
                  : value == "pagado"
                  ? (values.status = "pagado")
                  : (values.status = "cancelado")
              }
            >
              <SelectTrigger className="bg-[#334155] ring-white border border-[#455166] text-white rounded-md py-2 px-3 focus:ring-offset-0 focus-visible:ring-2 focus:ring-white">
                <SelectValue placeholder="Seleccione subcategoría" />
              </SelectTrigger>
              <SelectContent className="bg-[#334155] text-white z-[12222]">
                <SelectGroup onMouseDown={(e) => e.stopPropagation()}>
                  <SelectItem value={"pendiente"}>Pendiente</SelectItem>
                  <SelectItem value={"pagado"}>Pagado</SelectItem>
                  <SelectItem value={"cancelado"}>Cancelado</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {touched.status && errors.status && (
              <small className="font-bold text-[#ff4444]">
                {errors.status}
              </small>
            )}
          </div>
          {error && (
            <small className="font-bold text-[#ff4444]">
              Error al actualizar la orden:{" "}
              {error instanceof AxiosError
                ? error.response?.data?.error
                : error.message}
            </small>
          )}
          <Button
            className="border border-[#455166]"
            type="submit"
            variant="productActions"
          >
            Editar la orden
          </Button>
        </>
      )}
    </form>
  )
}
