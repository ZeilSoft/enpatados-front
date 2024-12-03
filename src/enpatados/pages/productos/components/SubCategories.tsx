import usePagination from "@/enpatados/hooks/usePagination"
import { SubCategory } from "@/enpatados/interfaces/SubCategory"
import { Icon } from "@iconify/react/dist/iconify.js"

interface SubCategoriesProps {
  subCategories?: SubCategory[]
}
const SubCategories = ({ subCategories }: SubCategoriesProps) => {
  const { handleSubCategory, searchParams } = usePagination()
  const subCategorySelected = Number(searchParams.get("subcategory")) || null

  function handleSelect(id: number) {
    handleSubCategory(id, Number(searchParams.get("category")))
  }

  return (
    <div className="flex flex-wrap gap-4">
      {subCategorySelected && (
        <button
          onClick={() => handleSelect(0)}
          className={`py-2 px-4 border transition-colors duration-150 border-green-main text-green-main rounded-full hover:bg-green-main hover:text-white uppercase`}
        >
          <Icon icon="material-symbols:close" width={20} />
        </button>
      )}
      {subCategories
        ? subCategories.map((subCategory: SubCategory) => (
            <button
              onClick={() => handleSelect(subCategory.id)}
              key={crypto.randomUUID()}
              className={`py-2 px-4 border transition-colors duration-150 border-green-main text-green-main rounded-full hover:bg-green-main hover:text-white min-w-20
            ${
              subCategorySelected != null &&
              subCategorySelected === subCategory.id
                ? "bg-green-main text-white"
                : ""
            }
            `}
              disabled={subCategorySelected === subCategory.id}
            >
              {subCategory.name}
            </button>
          ))
        : ""}
    </div>
  )
}
export default SubCategories
