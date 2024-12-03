import axiosInstance from "@/api/axiosInstance"

export async function getCategories() {
  try {
    const response = await axiosInstance.get("category")
    return response.data
  } catch (error) {
    throw error
  }
}
