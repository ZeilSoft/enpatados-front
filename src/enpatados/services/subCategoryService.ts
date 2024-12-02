import axiosInstance from "@/api/axiosInstance"

export async function getSubCategories() {
  try {
    const response = await axiosInstance.get("subCategory")
    return response.data.subcategories
  } catch (error) {
    throw error
  }
}
