import { SubCategory } from "./SubCategory"

export interface Category {
  category_id: number
  name: string
  description: string
  icon: string
  productId?: number
  subcategories?: SubCategory[]
}
