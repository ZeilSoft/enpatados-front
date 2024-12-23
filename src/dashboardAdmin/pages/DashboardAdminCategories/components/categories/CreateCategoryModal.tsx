import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useFormik } from "formik"
import { createCategorySchema } from "@/dashboardAdmin/utils/schemas/createCategory"
import { useMutation } from "@tanstack/react-query"
import { createCategory } from "@/enpatados/services/categoryService"
import { Label } from "@/components/ui/label"
import { AxiosError } from "axios"
interface CreateCategoryModalProps {
  refetch: Function
}
export const CreateCategoryModal: React.FC<CreateCategoryModalProps> = ({
  refetch,
}) => {
  const [success, setSuccess] = useState(false)

  const { handleSubmit, errors, touched, getFieldProps, values, resetForm } =
    useFormik({
      initialValues: {
        name: "",
        description: "",
        icon: "",
      },
      validationSchema: createCategorySchema,
      onSubmit: () => {
        mutate()
      },
    })

  const { isPending, mutate, error } = useMutation({
    mutationKey: ["createCategory"],
    mutationFn: async () => {
      await createCategory(values)
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
          <h1 className="text-white">Categoria creado con éxito</h1>
          <Button
            className="border border-[#455166]"
            type="button"
            variant="productActions"
            onClick={() => {
              setSuccess(false)
            }}
          >
            Crear otra categoria
          </Button>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2">
            <Label className="text-sm">Nombre de la categoria</Label>
            <Input
              className="bg-[#334155] ring-white border border-[#455166]"
              placeholder="Nombre de la categoria"
              {...getFieldProps("name")}
              disabled={isPending}
            />

            {touched.name && errors.name && (
              <small className="font-bold text-[#ff4444]">{errors.name}</small>
            )}

            <Label className="text-sm">Descripción de la categoria</Label>
            <Input
              className="bg-[#334155] ring-white border border-[#455166]"
              placeholder="Descripción de la categoria"
              {...getFieldProps("description")}
              disabled={isPending}
            />

            {touched.description && errors.description && (
              <small className="font-bold text-[#ff4444]">
                {errors.description}
              </small>
            )}

            <Label className="text-sm">Icono de la categoria</Label>
            <Input
              className="bg-[#334155] ring-white border border-[#455166]"
              placeholder="Nombre del icono"
              {...getFieldProps("icon")}
              disabled={isPending}
            />

            {touched.icon && errors.icon && (
              <small className="font-bold text-[#ff4444]">{errors.icon}</small>
            )}
          </div>
          <Button
            className="border border-[#455166]"
            type="submit"
            variant="productActions"
          >
            Crear categoria
          </Button>
          {error && (
            <small className="font-bold text-[#ff4444]">
              Error al crear el producto:{" "}
              {error instanceof AxiosError
                ? error.response?.data?.error
                : error.message}
            </small>
          )}
        </>
      )}
    </form>
  )
}
