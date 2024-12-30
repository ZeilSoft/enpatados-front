import * as yup from "yup"

export const updateOrderSchema = yup.object().shape({
  status: yup.string().required("El status es requerido"),
})
