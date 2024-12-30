export interface User {
  user_id: number
  name: string
  surname: string
  email: string
  password: string
  dateOfBirth?: Date
  role: "admin" | "customer"
}
