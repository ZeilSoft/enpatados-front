import { SubCategory } from "./SubCategory"

export interface Category {
  id: number
  name: string
  description: string
  icon: string
  productId?: number
  subcategories?: SubCategory[]
}
