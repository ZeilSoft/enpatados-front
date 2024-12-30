import axiosInstance from "@/api/axiosInstance"

export async function getProducts({
  page = 1,
  pageSize = 10,
  categoryId,
  subCategoryId,
  search,
}: {
  page?: number
  pageSize?: number | ""
  categoryId?: string
  subCategoryId?: string
  search?: string
}) {
  try {
    const response = await axiosInstance.get(
      "product?page=" +
        page +
        "&pageSize=" +
        pageSize +
        "&categoryId=" +
        categoryId +
        "&subcategoryId=" +
        subCategoryId +
        "&search=" +
        search
    )
    return response
  } catch (error) {
    throw error
  }
}

export async function createProduct({
  name,
  description,
  price,
  stock,
  categoryId,
  subcategoryId,
  images,
}: {
  name: string
  description: string
  price: number
  stock: number
  categoryId: string
  subcategoryId: string
  images: { url: string }[]
}) {
  try {
    const response = await axiosInstance.post("product", {
      name,
      description,
      price,
      stock,
      category_id: categoryId,
      subcategory_id: subcategoryId,
      images,
    })
    return response
  } catch (error) {
    throw error
  }
}

export async function updateProduct({
  id,
  name,
  description,
  price,
  stock,
  categoryId,
  subcategoryId,
  images,
}: {
  id: number
  name: string
  description: string
  price: number
  stock: number
  categoryId: number
  subcategoryId: number
  images: { url: string }[]
}) {
  try {
    const response = await axiosInstance.put(`product/${id}`, {
      name,
      description,
      price,
      stock,
      category_id: categoryId,
      subcategory_id: subcategoryId,
      images,
    })
    return response
  } catch (error) {
    throw error
  }
}

export async function deleteProduct(id: number) {
  try {
    const response = await axiosInstance.delete(`product/${id}`)
    return response
  } catch (error) {
    throw error
  }
}
