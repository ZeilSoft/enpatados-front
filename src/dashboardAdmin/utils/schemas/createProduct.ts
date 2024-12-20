import * as yup from "yup"

export const createProductSchema = yup.object().shape({
  name: yup
    .string()
    .required("El nombre es requerido")
    .min(4, "El nombre debe tener al menos 4 caracteres")
    .max(30, "El nombre no puede tener más de 30 caracteres"),
  description: yup
    .string()
    .required("La descripción es requerido")
    .min(4, "La descripción debe tener al menos 4 caracteres")
    .max(300, "La descripción no puede tener más de 300 caracteres"),
  price: yup.number().required("El precio es requerido"),
  stock: yup.number().required("El stock es requerido"),
  categoryId: yup.string().required("La categoría es requerida"),
  subcategoryId: yup.string().required("La subcategoría es requerida"),
  images: yup
    .array()
    .of(
      yup.object().shape({
        url: yup
          .string()
          .required("La URL de la imagen es requerida")
          .url("Debe ser una URL válida"),
      })
    )
    .min(1, "Debe haber al menos una imagen"),
})
