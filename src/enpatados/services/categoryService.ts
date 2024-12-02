import axiosInstance from "@/api/axiosInstance"

export async function getCategories() {
  try {
    const response = await axiosInstance.get("category")
    return response
  } catch (error) {
    throw error
  }
}
