import usePagination from "@/enpatados/hooks/usePagination"
import { Category } from "@/enpatados/interfaces/Category"
import SubCategories from "./SubCategories"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react/dist/iconify.js"
interface CategoriesProps {
  categories?: Category[]
}
const Categories = ({ categories }: CategoriesProps) => {
  const { handleCategory, searchParams } = usePagination()
  const categorySelected = Number(searchParams.get("category")) || null

  function handleSelect(id: number) {
    handleCategory(id)
  }

  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-wrap gap-4">
        {categorySelected && (
          <button
            onClick={() => handleSelect(0)}
            className={`py-2 px-4 border transition-colors duration-150 border-orange-main text-orange-main rounded-full hover:bg-orange-main hover:text-white uppercase`}
          >
            <Icon icon="material-symbols:close" width={20} />
          </button>
        )}
        {categories ? (
          categories.map((category: Category) => (
            <button
              onClick={() => handleSelect(category.id)}
              className={`py-2 px-4 border transition-colors duration-150 border-orange-main text-orange-main rounded-full hover:bg-orange-main hover:text-white uppercase
            ${
              categorySelected != null && categorySelected === category.id
                ? "bg-orange-main text-white"
                : ""
            }
            
            `}
              disabled={categorySelected === category.id}
              key={crypto.randomUUID()}
            >
              {category.name}
            </button>
          ))
        ) : (
          <div>Categorias no encontradas</div>
        )}
      </div>
      <motion.div
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={{
          height: "auto",
          opacity: 1,
        }}
        exit={{
          height: 0,
          opacity: 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <SubCategories
          subCategories={
            categorySelected != undefined && categories
              ? categories[categorySelected - 1].subcategories
              : undefined
          }
        />
      </motion.div>
    </div>
  )
}
export default Categories
