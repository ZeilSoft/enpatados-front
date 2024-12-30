import { Image } from "./Image"

export interface Product {
  product_id: number
  name: string
  description: string
  price: number
  stock: number
  images: Image[]
  category_id: number
  category: {name: string}
  subcategory: {name: string}
  subcategory_id?: number | undefined
}
