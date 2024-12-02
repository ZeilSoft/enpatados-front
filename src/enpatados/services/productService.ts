import axiosInstance from "@/api/axiosInstance"

export async function getProducts({
  page = 1,
  pageSize = 10,
  categoryId,
  subCategoryId,
  search,
}: {
  page?: number
  pageSize?: number
  categoryId?: string
  subCategoryId?: string
  search?: string
}) {
  try {
    const response = await axiosInstance.get("product", {
      params: { page, pageSize, categoryId, subCategoryId, search },
    })    
    return response
  } catch (error) {
    throw error
  }
}
