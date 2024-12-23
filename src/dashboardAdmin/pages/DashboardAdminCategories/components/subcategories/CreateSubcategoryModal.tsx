import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useFormik } from "formik"
import { createSubCategorySchema } from "@/dashboardAdmin/utils/schemas/createSubCategory"
import { useMutation, useQuery } from "@tanstack/react-query"
import { createSubCategory } from "@/enpatados/services/subCategoryService"
import { AxiosError } from "axios"
import { Label } from "@/components/ui/label"
import { getCategories } from "@/enpatados/services/categoryService"
import { Category } from "@/enpatados/interfaces/Category"

interface CreateSubcategoryModalProps {
  refetch: Function
}
export const CreateSubcategoryModal: React.FC<CreateSubcategoryModalProps> = ({
  refetch,
}) => {
  const [success, setSuccess] = useState(false)

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  })

  const { handleSubmit, errors, touched, getFieldProps, values, resetForm } =
    useFormik({
      initialValues: {
        name: "",
        categoryId: 0,
      },
      validationSchema: createSubCategorySchema,
      onSubmit: () => {
        mutate()
      },
    })

  const { isPending, mutate, error } = useMutation({
    mutationKey: ["createCategory"],
    mutationFn: async () => {
      await createSubCategory(values)
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
          <h1 className="text-white">Sub Categoria creado con éxito</h1>
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
            <Label className="text-sm">Nombre de la sub categoria</Label>
            <Input
              className="bg-[#334155] ring-white border border-[#455166]"
              placeholder="Nombre de la sub categoria"
              {...getFieldProps("name")}
              disabled={isPending}
            />

            {touched.name && errors.name && (
              <small className="font-bold text-[#ff4444]">{errors.name}</small>
            )}

            <Label className="text-sm">Categoria</Label>
            <Select
              onValueChange={(value) => {
                values.categoryId = Number(value)
              }}
            >
              <SelectTrigger className="bg-[#334155] ring-white border border-[#455166] text-white rounded-md py-2 px-3 focus:ring-offset-0 focus-visible:ring-2 focus:ring-white">
                <SelectValue placeholder="Seleccione categoría" />
              </SelectTrigger>
              <SelectContent className="bg-[#334155] text-white z-[12222]">
                <SelectGroup onMouseDown={(e) => e.stopPropagation()}>
                  {categories?.map((category: Category) => (
                    <SelectItem
                      key={crypto.randomUUID()}
                      value={category.id.toString()}
                    >
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            {touched.categoryId && errors.categoryId && (
              <small className="font-bold text-[#ff4444]">
                {errors.categoryId}
              </small>
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
