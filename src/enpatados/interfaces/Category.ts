import { SubCategory } from "./SubCategory"

export interface Category {
  id: number
  name: string
  description: string
  icon: Text
  productId?: number
  subcategories?: SubCategory[]
}
