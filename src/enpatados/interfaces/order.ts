export interface Order {
  orderNumber: number
  date: Date
  total: number
  status: string
  userId: number
  discount?: number
}
