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
import { createProductSchema } from "@/dashboardAdmin/utils/schemas/createProduct"
import { useMutation, useQuery } from "@tanstack/react-query"
import { createProduct } from "@/enpatados/services/productService"
import { Category } from "@/enpatados/interfaces/Category"
import { getCategories } from "@/enpatados/services/categoryService"
import { SubCategory } from "@/enpatados/interfaces/SubCategory"
import { Label } from "@radix-ui/react-dropdown-menu"
import { AxiosError } from "axios"
interface CreateProductModalProps {
  refetch: Function
}
export const CreateProductModal: React.FC<CreateProductModalProps> = ({
  refetch
}) => {
  const [images, setImages] = useState([{ url: "" }])
  const [category, setCategory] = useState<undefined | string>(undefined)
  const [success, setSuccess] = useState(false)


  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  })

  const { handleSubmit, errors, touched, getFieldProps, values, resetForm } = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: 0,
      stock: 0,
      categoryId: "",
      subcategoryId: "",
      images: images,
    },
    validationSchema: createProductSchema,
    onSubmit: () => {
      mutate()
    },
  })

  const { isPending, mutate, error } = useMutation({
    mutationKey: ["createProduct"],
    mutationFn: async () => {
      const data = {
        name: values.name,
        description: values.description,
        price: values.price,
        stock: values.stock,
        categoryId: categories[values.categoryId].category_id.toString(),
        subcategoryId: values.subcategoryId,
        images: values.images,
      }
      await createProduct(data)
    },
    onSuccess: () => {
      setSuccess(true)
      resetForm()
      refetch()
    },
  })

  const handleAddImages = () => {
    setImages([...images, { url: "" }])
  }

  const handleRemoveImages = (index: number) => {
    const newSubCategories = images.filter((_: any, i: number) => i !== index)
    setImages(newSubCategories)
  }

  return (
    <form className="flex flex-col gap-4 text-white" onSubmit={handleSubmit}>
      {success ? (
        <div className="flex flex-col gap-4">
          <h1 className="text-white">Producto creado con éxito</h1>
          <Button
            className="border border-[#455166]"
            type="button"
            variant="productActions"
            onClick={() => {
              setSuccess(false)
              setImages([{ url: "" }])
              setCategory(undefined)
            }}
          >
            Crear otro producto
          </Button>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2">
            <Label className="text-sm">Nombre del producto</Label>
            <Input
              className="bg-[#334155] ring-white border border-[#455166]"
              placeholder="Nombre del producto"
              {...getFieldProps("name")}
              disabled={isPending}
            />

            {touched.name && errors.name && (
              <small className="font-bold text-[#ff4444]">{errors.name}</small>
            )}
            <Label className="text-sm">Descripcion del producto</Label>
            <Input
              className="bg-[#334155] ring-white border border-[#455166]"
              placeholder="Descripción del producto"
              {...getFieldProps("description")}
              disabled={isPending}
            />

            {touched.description && errors.description && (
              <small className="font-bold text-[#ff4444]">
                {errors.description}
              </small>
            )}

            <Label className="text-sm">Precio</Label>

            <Input
              className="bg-[#334155] ring-white border border-[#455166]"
              placeholder="Precio"
              type="number"
              {...getFieldProps("price")}
              disabled={isPending}
            />

            {touched.price && errors.price && (
              <small className="font-bold text-[#ff4444]">{errors.price}</small>
            )}

            <Select
              onValueChange={(value) => {
                setCategory(value)
                values.categoryId = value
                values.subcategoryId = ""
              }}
            >
              <SelectTrigger className="bg-[#334155] ring-white border border-[#455166] text-white rounded-md py-2 px-3 focus:ring-offset-0 focus-visible:ring-2 focus:ring-white">
                <SelectValue placeholder="Seleccione categoría" />
              </SelectTrigger>
              <SelectContent className="bg-[#334155] text-white z-[12222]">
                <SelectGroup onMouseDown={(e) => e.stopPropagation()}>
                  {categories?.map((category: Category, index : number) => (
                    <SelectItem
                      key={crypto.randomUUID()}
                      value={index.toString()}
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

            {category != undefined && (
              <Select onValueChange={(value) => (values.subcategoryId = value)}>
                <SelectTrigger className="bg-[#334155] ring-white border border-[#455166] text-white rounded-md py-2 px-3 focus:ring-offset-0 focus-visible:ring-2 focus:ring-white">
                  <SelectValue placeholder="Seleccione subcategoría" />
                </SelectTrigger>
                <SelectContent className="bg-[#334155] text-white z-[12222]">
                  <SelectGroup onMouseDown={(e) => e.stopPropagation()}>
                    {categories[Number(category)]?.subcategories.map(
                      (subcategory: SubCategory) => (
                        <SelectItem
                          key={crypto.randomUUID()}
                          value={subcategory.subcategory_id.toString()}
                        >
                          {subcategory.name}
                        </SelectItem>
                      )
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}

            {touched.subcategoryId && errors.subcategoryId && (
              <small className="font-bold text-[#ff4444]">
                {errors.subcategoryId}
              </small>
            )}

            <Label className="text-sm">Stock del producto</Label>

            <Input
              className="bg-[#334155] ring-white border border-[#455166]"
              placeholder="Stock"
              type="number"
              {...getFieldProps("stock")}
              disabled={isPending}
            />

            {touched.stock && errors.stock && (
              <small className="font-bold text-[#ff4444]">{errors.stock}</small>
            )}

            {images.map((image, index: number) => (
              <div key={index}>
                <Input
                  className="bg-[#334155] ring-white border border-[#455166]"
                  placeholder="Ingrese una imagen"
                  defaultValue={image.url}
                  type="url"
                  {...getFieldProps(`images[${index}].url`)}
                  disabled={isPending}
                />
                {touched.images?.[index]?.url &&
                  typeof errors.images?.[index] === "object" &&
                  errors.images[index]?.url && (
                    <small className="font-bold text-[#ff4444]">
                      {errors.images[index].url}
                    </small>
                  )}
              </div>
            ))}
            <div className="flex w-full gap-4">
              <Button
                className="border border-[#455166]"
                type="button"
                variant="productActions"
                onClick={handleAddImages}
              >
                Agregar una imagen
              </Button>
              <Button
                className="border border-[#455166]"
                type="button"
                variant="productActions"
                onClick={() => {
                  if (images.length > 1)
                    return handleRemoveImages(images.length - 1)
                }}
              >
                Quitar la ultima imagen
              </Button>
            </div>
          </div>
          {
            error && (
              <small className="font-bold text-[#ff4444]">
                Error al crear el producto: {error instanceof AxiosError ? error.response?.data?.error : error.message}
              </small>
            )
          }
          <Button
            className="border border-[#455166]"
            type="submit"
            variant="productActions"
          >
            Crear producto
          </Button>
        </>
      )}
    </form>
  )
}
