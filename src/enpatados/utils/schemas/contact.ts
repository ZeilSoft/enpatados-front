import * as yup from "yup"

export const contactSchema = yup.object({
  name: yup
    .string()
    .required("El nombre es requerido")
    .min(4, "El nombre debe tener al menos 4 caracteres")
    .max(30, "El nombre no puede tener más de 30 caracteres"),
  message: yup
    .string()
    .required("El mensaje es requerido")
    .min(15, "El mensaje debe tener al menos 15 caracteres")
    .max(500, "El mensaje no puede tener más de 200 caracteres"),
})
