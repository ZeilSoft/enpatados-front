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
