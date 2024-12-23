import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { updateCategory } from "@/enpatados/services/categoryService"
import { useMutation } from "@tanstack/react-query"
import { createCategorySchema } from "@/dashboardAdmin/utils/schemas/createCategory"
import { useFormik } from "formik"
import { Category } from "@/enpatados/interfaces/Category"
import { Label } from "@/components/ui/label"
import { AxiosError } from "axios"

interface EditCategoryModalProps {
  category: Category
  refetch: Function
}

export const EditCategoryModal: React.FC<EditCategoryModalProps> = ({
  category,
  refetch
}) => {
  const [success, setSuccess] = useState(false)

  const { handleSubmit, errors, touched, getFieldProps, values, resetForm } =
    useFormik({
      initialValues: {
        name: category.name,
        description: category.description,
        icon: category.icon,
        categoryId: category.id,
      },
      validationSchema: createCategorySchema,
      onSubmit: () => {
        mutate()
      },
    })

  const { isPending, mutate, error } = useMutation({
    mutationKey: ["updateCategory"],
    mutationFn: async () => {
      await updateCategory(values)
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
          <h1 className="text-white">Categoria actualizada con éxito</h1>
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
            Actualizar categoria
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
