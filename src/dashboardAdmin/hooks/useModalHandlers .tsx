// Store
import { useModalStore } from "@/store/ui.store";

// Product
import { CreateProductModal } from "../pages/DashboardAdminProducts/components/CreateProductModal";
import { EditProductModal } from "../pages/DashboardAdminProducts/components/EditProductModal";
import { DeleteProductModal } from "../pages/DashboardAdminProducts/components/DeleteProductModal";
import { Product } from "@/enpatados/interfaces/Product";

// Category
import { CreateCategoryModal } from "../pages/DashboardAdminCategories/components/categories/CreateCategoryModal";
import { EditCategoryModal } from "../pages/DashboardAdminCategories/components/categories/EditCategoryModal";
import { DeleteCategoryModal } from "../pages/DashboardAdminCategories/components/categories/DeleteCategoryModal";

// Subategory
import { CreateSubcategoryModal } from "../pages/DashboardAdminCategories/components/subcategories/CreateSubcategoryModal";
import { EditSubcategoryModal } from "../pages/DashboardAdminCategories/components/subcategories/EditSubcategoryModal";
import { DeleteSubcategoryModal } from "../pages/DashboardAdminCategories/components/subcategories/DeleteSubcategoryModal";

// User
import { CreateUserModal } from "../pages/DashboardAdminUsers/components/CreateUserModal";
import { EditUserModal } from "../pages/DashboardAdminUsers/components/EditUserModal";
import { DeleteUserModal } from '../pages/DashboardAdminUsers/components/DeleteUserModal';

export const useModalHandlers = () => {
  const { openModal } = useModalStore();

  // Product
  const handleCreateProduct = (refetch: Function) => {
    const content = <CreateProductModal refetch={refetch} />;
    openModal("Crear Producto", content);
  };

  const handleEditProduct = (product: Product, refetch: Function) => {
    const content = <EditProductModal product={product} refetch={refetch} />;
    openModal("Editar Producto", content);
  };

  const handleDeleteProduct = (id: number, name: string, refetch: Function) => {
    const content = <DeleteProductModal id={id} name={name} refetch={refetch} />;
    openModal("Eliminar Producto", content);
  };


  // Category
  const handleCreateCategory = () => {
    const content = <CreateCategoryModal />;
    openModal("Crear Categoria", content);
  };

  const handleEditCategory = (category: any) => {
    const content = <EditCategoryModal category={category} />;
    openModal("Editar Categoria", content);
  };

  const handleDeleteCategory = (categoryName: any) => {
    const content = <DeleteCategoryModal categoryName={categoryName} />;
    openModal("Eliminar Categoria", content);
  };

  // Subcategory
  const handleCreateSubcategory = () => {
    const content = <CreateSubcategoryModal />;
    openModal("Crear Subcategoria", content);
  };

  const handleEditSubcategory = (subcategory: any) => {
    const content = <EditSubcategoryModal subcategory={subcategory} />;
    openModal("Editar Subcategoria", content);
  };

  const handleDeleteSubcategory = (subcategoryName: any) => {
    const content = <DeleteSubcategoryModal subcategoryName={subcategoryName} />;
    openModal("Eliminar Subcategoria", content);
  };

  // User
  const handleCreateUser = () => {
    const content = <CreateUserModal />;
    openModal("Crear Usuario", content);
  };

  const handleEditUser = (user: any) => {
    const content = <EditUserModal user={user} />;
    openModal("Editar Usuario", content);
  };

  const handleDeleteUser = (userName: any) => {
    const content = <DeleteUserModal userName={userName} />;
    openModal("Eliminar Usuario", content);
  };

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
  };
};