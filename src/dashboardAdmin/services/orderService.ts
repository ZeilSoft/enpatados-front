import axiosInstance from "@/api/axiosInstance"

export function getOrders() {
  try {
    const response = axiosInstance.get("order")
    return response
  } catch (error) {
    throw error
  }
}

export function deleteOrder(id: number) {
  try {
    const response = axiosInstance.delete(`order/${id}`)
    return response
  } catch (error) {
    throw error
  }
}

export function updateOrder(
  status: "pending" | "paid" | "canceled",
  id: number,
  discount: number
) {  
  try {
    const response = axiosInstance.put(`order/${id}`, {
       status: status ,
       discount: discount
    })
    return response
  } catch (error) {
    throw error
  }
}
