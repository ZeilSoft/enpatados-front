import * as yup from "yup"

export const createCategorySchema = yup.object().shape({
  name: yup
    .string()
    .required("El nombre es requerido")
    .min(4, "El nombre debe tener al menos 4 caracteres")
    .max(50, "El nombre no puede tener más de 30 caracteres"),
  description: yup
    .string()
    .required("La descripción es requerido")
    .min(4, "La descripción debe tener al menos 4 caracteres")
    .max(300, "La descripción no puede tener más de 300 caracteres"),
  icon: yup.string().required("El icono es requerido"),
})
