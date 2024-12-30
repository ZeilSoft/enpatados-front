import { Product } from "./Product"

export interface Order {
  order_number: number
  date: string
  total: number
  status: 'pending' | 'paid' | 'canceled'
  userId: number
  discount: number
  createdAt: string
  updatedAt: string
  products: Product[]
}
