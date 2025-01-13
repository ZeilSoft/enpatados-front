import axiosInstance from "@/api/axiosInstance"

export async function getSubCategories() {
  try {
    const response = await axiosInstance.get("subCategory")
    return response.data
  } catch (error) {
    throw error
  }
}

export async function createSubCategory({
  name,
  categoryId,
}: {
  name: string
  categoryId: number
}) {
  try {
    const response = await axiosInstance.post("subCategory", {
      name,
      categoryId,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export async function updateSubCategory({
  name,
  categoryId,
  subcategoryId,
}: {
  name: string
  categoryId: number
  subcategoryId: number
}) {
  try {
    const response = await axiosInstance.put(`subCategory/${subcategoryId}`, {
      name,
      categoryId,
    })
    return response
  } catch (error) {
    throw error
  }
}

export async function deleteSubCategory(subcategoryId: number) {
  try {
    const response = await axiosInstance.delete(`subCategory/${subcategoryId}`)
    return response
  } catch (error) {
    throw error
  }
}
