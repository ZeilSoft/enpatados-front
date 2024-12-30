import { Category } from "./Category"

export interface SubCategory {
    subcategory_id: number
    name: string
    categoryId: number
    category: Category
}