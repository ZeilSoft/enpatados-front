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
