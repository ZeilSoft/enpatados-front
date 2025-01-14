import usePagination from "@/enpatados/hooks/usePagination"
import { Category } from "@/enpatados/interfaces/Category"
import SubCategories from "./SubCategories"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useEffect, useState } from "react"
import { SubCategory } from "@/enpatados/interfaces/SubCategory"
interface CategoriesProps {
  categories?: Category[]
}
const Categories = ({ categories }: CategoriesProps) => {
  const { handleCategory, searchParams } = usePagination()
  const categorySelected = Number(searchParams.get("category")) || null
  const [subCategories, setSubCategories] = useState<SubCategory[] | undefined>()

  function handleSelect(id: number) {
    handleCategory(id)
  }
  useEffect(()=>{
    if(categories && categorySelected){
    const categoryArray = categories.filter(
      (category) => category.category_id == categorySelected
    )    
    setSubCategories(categoryArray[0].subcategories)
  }
    
  },[categorySelected])
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex flex-wrap gap-4">
        {categorySelected && (
          <button
            onClick={() => handleSelect(0)}
            className={`py-2 px-4 border transition-colors duration-150 border-yellow-main rounded-full hover:bg-yellow-main hover:text-white uppercase text-yellow-main`}
          >
            <Icon icon="material-symbols:close" width={20} />
          </button>
        )}
        {categories ? (
          categories.map((category: Category) => (
            <button
              onClick={() => handleSelect(category.category_id)}
              className={`py-2 px-4 border transition-colors duration-150 border-yellow-main rounded-full hover:bg-yellow-main hover:text-white uppercase
            ${
              categorySelected != null && categorySelected == category.category_id
                ? "bg-yellow-main text-white"
                : "text-yellow-main"
            }
            
            `}
              disabled={categorySelected === category.category_id}
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
              ? subCategories
              : undefined
          }
        />
      </motion.div>
    </div>
  )
}
export default Categories
