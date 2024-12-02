import { Category } from "@/enpatados/interfaces/Category"

interface CategoriesProps {
  categories?: Category[]
}
const Categories = ({ categories }: CategoriesProps) => {
  return (
    <div>
      {categories ? (
        categories.map((category : Category) => (
          <div key={crypto.randomUUID()}>{category.name}</div>
        ))
      ) : (
        <div>Categorias no encontradas</div>
      )}
    </div>
  )
}
export default Categories
