import { Product } from "./Product"

export interface Order {
  order_id: number
  order_number: number
  date: string
  total: number
  status: 'pendiente' | 'pagado' | 'cancelado'
  userId: number
  discount: number
  createdAt: string
  updatedAt: string
  products: Product[]
}
