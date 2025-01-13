import React, { useEffect, useState } from "react"
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
import { Product } from "@/enpatados/interfaces/Product"
import { AxiosError } from "axios"
import { Label } from "@/components/ui/label"
import { SubCategory } from "@/enpatados/interfaces/SubCategory"
import { Category } from "@/enpatados/interfaces/Category"
import { updateProduct } from "@/enpatados/services/productService"
import { useMutation, useQuery } from "@tanstack/react-query"
import { createProductSchema } from "@/dashboardAdmin/utils/schemas/createProduct"
import { getCategories } from "@/enpatados/services/categoryService"
import { useFormik } from "formik"

interface EditProductModalProps {
  product: Product
  refetch: Function
}

export const EditProductModal: React.FC<EditProductModalProps> = ({
  product,
  refetch,
}) => {
  const [images, setImages] = useState(product.images)
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  })
  const [category, setCategory] = useState<undefined | string>(
    categories
      ?.findIndex(
        (category: Category) =>
          category.category_id === Number(product.category_id)
      )
      .toString()
  )
  const [subcategory, setSubcategory] = useState<string | undefined>(
    categories[Number(category)].subcategories.findIndex(
      (sub: SubCategory) => sub.subcategory_id === product.subcategory_id
    ).toString()
  )

  const [success, setSuccess] = useState(false)

  const { handleSubmit, errors, touched, getFieldProps, values, resetForm } =
    useFormik({
      initialValues: {
        name: product.name ? product.name : "",
        description: product.description ? product.description : "",
        price: product.price ? product.price : 0,
        stock: product.stock ? product.stock : 0,
        categoryId: product.category_id ? product.category_id : "",
        subcategoryId: categories[
          Number(category)
        ].subcategories.findIndex(
          (sub: SubCategory) => sub.subcategory_id === product.subcategory_id
        ).toString(),
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
        id: product.product_id,
        name: values.name,
        description: values.description,
        price: values.price,
        stock: values.stock,
        categoryId: Number(categories[Number(category)].category_id),
        subcategoryId:
          categories[Number(category)].subcategories[values.subcategoryId]
            .subcategory_id,
        images: values.images,
      }

      await updateProduct(data)
    },
    onSuccess: () => {
      setSuccess(true)
      resetForm()
      refetch()
    },
  })

  const handleAddImages = () => {
    setImages([...images, { url: "" }])
    values.images = [...images, { url: "" }]
  }

  const handleRemoveImages = (index: number) => {
    const newSubCategories = images.filter((_: any, i: number) => i !== index)
    values.images = newSubCategories
    setImages(newSubCategories)
  }
  useEffect(() => {
    values.subcategoryId = ""
  }, [category])

  return (
    <form className="flex flex-col gap-4 text-white" onSubmit={handleSubmit}>
      {success ? (
        <div className="flex flex-col gap-4">
          <h1 className="text-white">Producto editado con éxito</h1>
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
              defaultValue={categories
                ?.findIndex(
                  (category: Category) =>
                    category.category_id === Number(product.category_id)
                )
                .toString()}
              onValueChange={(value) => {
                values.subcategoryId = "" // Limpia el valor de Formik
                setSubcategory("") // Limpia el estado de subcategoría
                values.categoryId = value // Actualiza la categoría seleccionada
                setCategory(value)
              }}
            >
              <SelectTrigger className="bg-[#334155] ring-white border border-[#455166] text-white rounded-md py-2 px-3 focus:ring-offset-0 focus-visible:ring-2 focus:ring-white">
                <SelectValue placeholder="Seleccione categoría" />
              </SelectTrigger>
              <SelectContent className="bg-[#334155] text-white z-[12222]">
                <SelectGroup onMouseDown={(e) => e.stopPropagation()}>
                  {categories?.map((category: Category, index: number) => (
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
              <Select
                value={subcategory}
                onValueChange={(value) => {
                  setSubcategory(value) // Actualiza el estado de subcategoría
                  values.subcategoryId = value // Actualiza el valor en Formik
                }}
              >
                <SelectTrigger className="bg-[#334155] ring-white border border-[#455166] text-white rounded-md py-2 px-3 focus:ring-offset-0 focus-visible:ring-2 focus:ring-white">
                  <SelectValue placeholder="Seleccione subcategoría" />
                </SelectTrigger>
                <SelectContent className="bg-[#334155] text-white z-[12222]">
                  <SelectGroup onMouseDown={(e) => e.stopPropagation()}>
                    {categories[Number(category)]?.subcategories.map(
                      (subcategory: SubCategory, index: number) => (
                        <SelectItem
                          key={crypto.randomUUID()}
                          value={index.toString()}
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
                {errors.subcategoryId.toString()}
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
                  /*  disabled={isPending} */
                  disabled={true}
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
                disabled={true}
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
                disabled={true}
              >
                Quitar la ultima imagen
              </Button>
            </div>
            <span>
              La actualizacion de imagenes no esta funcionando por el momento
            </span>
          </div>
          {error && (
            <small className="font-bold text-[#ff4444]">
              Error al crear el producto:{" "}
              {error instanceof AxiosError
                ? error.response?.data?.error
                : error.message}
            </small>
          )}
          <Button
            className="border border-[#455166]"
            type="submit"
            variant="productActions"
          >
            Editar producto
          </Button>
        </>
      )}
    </form>
  )
}
