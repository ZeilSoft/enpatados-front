import { Image } from "./Image"

export interface Product {
  product_id: number
  name: string
  description: string
  price: number
  stock: number
  images: Image[]
  categoryId: number
  category: {name: string}
  subcategory: {name: string}
  subcategoryId?: number | undefined
}
