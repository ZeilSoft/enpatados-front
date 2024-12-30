import axiosInstance from "@/api/axiosInstance"

export async function getUsers() {
  try {
    const response = await axiosInstance.get(`user`)
    return response
  } catch (error) {
    throw error
  }
}

export function updateRole(id: number, role: string) {
  try {
    const response = axiosInstance.put(`user/${id}`, {
      role:role
    })
    return response
  } catch (error) {
    throw error
  }
}
