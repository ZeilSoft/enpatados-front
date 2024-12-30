import { Product } from "./Product"

export interface Order {
  id: number
  orderNumber: number
  date: string
  total: number
  status: 'pendiente' | 'pagado' | 'cancelado'
  userId: number
  discount: number
  createdAt: string
  updatedAt: string
  products: Product[]
}
