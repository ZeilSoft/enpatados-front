import { Category } from "./Category"

export interface SubCategory {
    id: number
    name: string
    categoryId: number
    category: Category
}