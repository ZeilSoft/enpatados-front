import axiosInstance from "@/api/axiosInstance"

export async function getCategories() {
  try {
    const response = await axiosInstance.get("category")
    return response.data
  } catch (error) {
    throw error
  }
}

export async function createCategory({
  name,
  description,
  icon,
}: {
  name: string
  description: string
  icon: string
}) {
  try {
    const response = await axiosInstance.post("category", {
      name,
      description,
      icon,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export async function updateCategory({
  name,
  description,
  icon,
  categoryId,
}: {
  name: string
  description: string
  icon: string
  categoryId: number
}) {
  try {
    const response = await axiosInstance.put(`category/${categoryId}`, {
      name,
      description,
      icon,
    })
    return response
  } catch (error) {
    throw error
  }
}

export async function deleteCategory(categoryId: number) {
  try {
    const response = await axiosInstance.delete(`category/${categoryId}`)
    return response
  } catch (error) {
    throw error
  }
}
