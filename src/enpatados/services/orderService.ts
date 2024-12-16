import axiosInstance from "@/api/axiosInstance"

export interface OrderProducts {
  id: number
  quantity: number
}

export function createOrder(products: { products: OrderProducts[] }) {
  try {
    const response = axiosInstance.post("order", {
      products: products,
    })
    return response
  } catch (error) {
    throw error
  }
}

export function getOrderById(id: string){
  try {
    const response = axiosInstance.get(`order/user/${id}`)
    return response
  } catch (error) {
    throw error
  }
}