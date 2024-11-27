export interface Order {
  orderNumber: number
  date: Date
  total: number
  status: "pendiente" | "pagado" | "cancelado"
  userId: number
  discount?: number
}
