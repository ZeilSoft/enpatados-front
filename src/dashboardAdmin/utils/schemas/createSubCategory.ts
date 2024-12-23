import * as yup from "yup"

export const createSubCategorySchema = yup.object().shape({
  name: yup
    .string()
    .required("El nombre es requerido")
    .min(4, "El nombre debe tener al menos 4 caracteres")
    .max(50, "El nombre no puede tener más de 30 caracteres"),
  categoryId: yup.number().required("La categoría es requerida"),
})
