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
import { EditUserModal } from "../pages/DashboardAdminUsers/components/EditUserModal"
import { SubCategory } from "@/enpatados/interfaces/SubCategory"
import { Category } from "@/enpatados/interfaces/Category"

// Order
import { DeleteOrderModal } from "../pages/DashboardAdminOrders/components/DeleteOrderModal"
import { UpdateOrderModal } from "../pages/DashboardAdminOrders/components/UpdateOrderModal"
import { Order } from "@/enpatados/interfaces/Order"

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
  const handleEditUser = (id: number, role: string, refetch: Function) => {
    const content = <EditUserModal id={id} role={role} refetch={refetch} />
    openModal("Editar Usuario", content)
  }

  // Orders
  const handleDeleteOrder = (id: number, refetch: Function) => {
    const content = <DeleteOrderModal id={id} refetch={refetch} />
    openModal("Eliminar Orden", content)
  }

  const handleUpdateOrder = (order: Order, refetch: Function) => {
    const content = <UpdateOrderModal order={order} refetch={refetch} />
    openModal("Actualizar Orden", content)
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
    handleEditUser,

    //order
    handleUpdateOrder,
    handleDeleteOrder,
  }
}
