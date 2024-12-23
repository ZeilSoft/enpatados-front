// Store
import { useModalStore } from "@/store/ui.store"

// Product
import { CreateProductModal } from "../pages/DashboardAdminProducts/components/CreateProductModal"
import { EditProductModal } from "../pages/DashboardAdminProducts/components/EditProductModal"
import { DeleteProductModal } from "../pages/DashboardAdminProducts/components/DeleteProductModal"
import { Product } from "@/enpatados/interfaces/Product"

// Category
import { CreateCategoryModal } from "../pages/DashboardAdminCategories/components/categories/CreateCategoryModal"
import { EditCategoryModal } from "../pages/DashboardAdminCategories/components/categories/EditCategoryModal"
import { DeleteCategoryModal } from "../pages/DashboardAdminCategories/components/categories/DeleteCategoryModal"

// Subategory
import { CreateSubcategoryModal } from "../pages/DashboardAdminCategories/components/subcategories/CreateSubcategoryModal"
import { EditSubcategoryModal } from "../pages/DashboardAdminCategories/components/subcategories/EditSubcategoryModal"
import { DeleteSubcategoryModal } from "../pages/DashboardAdminCategories/components/subcategories/DeleteSubcategoryModal"

// User
import { CreateUserModal } from "../pages/DashboardAdminUsers/components/CreateUserModal"
import { EditUserModal } from "../pages/DashboardAdminUsers/components/EditUserModal"
import { DeleteUserModal } from "../pages/DashboardAdminUsers/components/DeleteUserModal"
import { SubCategory } from "@/enpatados/interfaces/SubCategory"
import { Category } from "@/enpatados/interfaces/Category"

export const useModalHandlers = () => {
  const { openModal } = useModalStore()

  // Product
  const handleCreateProduct = (refetch: Function) => {
    const content = <CreateProductModal refetch={refetch} />
    openModal("Crear Producto", content)
  }

  const handleEditProduct = (product: Product, refetch: Function) => {
    const content = <EditProductModal product={product} refetch={refetch} />
    openModal("Editar Producto", content)
  }

  const handleDeleteProduct = (id: number, name: string, refetch: Function) => {
    const content = <DeleteProductModal id={id} name={name} refetch={refetch} />
    openModal("Eliminar Producto", content)
  }

  // Category
  const handleCreateCategory = (refetch: Function) => {
    const content = <CreateCategoryModal refetch={refetch} />
    openModal("Crear Categoria", content)
  }

  const handleEditCategory = (category: Category, refetch: Function) => {
    const content = <EditCategoryModal category={category} refetch={refetch} />
    openModal("Editar Categoria", content)
  }

  const handleDeleteCategory = (
    id: number,
    refetch: Function,
    refetchSubCategories: Function
  ) => {
    const content = (
      <DeleteCategoryModal
        id={id}
        refetch={refetch}
        refetchSubCategories={refetchSubCategories}
      />
    )
    openModal("Eliminar Categoria", content)
  }

  // Subcategory
  const handleCreateSubcategory = (refetch: Function) => {
    const content = <CreateSubcategoryModal refetch={refetch} />
    openModal("Crear Subcategoria", content)
  }

  const handleEditSubcategory = (
    subcategory: SubCategory,
    refetch: Function
  ) => {
    const content = (
      <EditSubcategoryModal subcategory={subcategory} refetch={refetch} />
    )
    openModal("Editar Subcategoria", content)
  }

  const handleDeleteSubcategory = (id: number, refetch: Function) => {
    const content = <DeleteSubcategoryModal id={id} refetch={refetch} />
    openModal("Eliminar Subcategoria", content)
  }

  // User
  const handleCreateUser = () => {
    const content = <CreateUserModal />
    openModal("Crear Usuario", content)
  }

  const handleEditUser = (user: any) => {
    const content = <EditUserModal user={user} />
    openModal("Editar Usuario", content)
  }

  const handleDeleteUser = (userName: any) => {
    const content = <DeleteUserModal userName={userName} />
    openModal("Eliminar Usuario", content)
  }

  return {
    // Products
    handleCreateProduct,
    handleEditProduct,
    handleDeleteProduct,

    // Category
    handleCreateCategory,
    handleEditCategory,
    handleDeleteCategory,

    // Subcategory
    handleCreateSubcategory,
    handleEditSubcategory,
    handleDeleteSubcategory,

    // Subcategory
    handleCreateUser,
    handleEditUser,
    handleDeleteUser,
  }
}
