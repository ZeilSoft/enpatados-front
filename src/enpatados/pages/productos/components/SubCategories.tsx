import { SubCategory } from "@/enpatados/interfaces/SubCategory"

interface SubCategoriesProps {
  subCategories?: SubCategory[]
}
const SubCategories = ({ subCategories }: SubCategoriesProps) => {
  return (
    <div>
      {subCategories ? (
        subCategories.map((subCategory) => (
          <div key={crypto.randomUUID()}>{subCategory.name}</div>
        ))
      ) : (
        <div>Subcategorias no encontradas</div>
      )}
    </div>
  )
}
export default SubCategories
