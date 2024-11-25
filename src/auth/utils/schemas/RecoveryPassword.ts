import * as yup from "yup"

export const recoveryPasswordSchema = yup.object({
  email : yup.string().required("El email es requerido").email("Formato invalido"),
})