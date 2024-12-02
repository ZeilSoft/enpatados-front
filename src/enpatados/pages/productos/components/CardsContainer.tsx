import { Product } from "@/enpatados/interfaces/Product"

interface CardsContainerProps {
  products?: Product[]
}
const CardsContainer = ({ products }: CardsContainerProps) => {
  return (
    <div>
      {products ? (
        <div>
          {products.map((product: Product) => (
            <div key={product.id}>{product.name}</div>
          ))}
        </div>
      ) : (
        "No se han encontrado productos"
      )}
    </div>
  )
}
export default CardsContainer
