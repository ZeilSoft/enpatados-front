import { Category } from "./Category"

export interface SubCategory {
    subcategory_id: number
    name: string
    category_id: number
    category: Category
}