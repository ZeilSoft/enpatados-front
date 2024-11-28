import { useModalStore } from "@/store/ui.store";

// Product
import { CreateProductModal } from "../pages/DashboardAdminProducts/components/CreateProductModal";
import { EditProductModal } from "../pages/DashboardAdminProducts/components/EditProductModal";
import { DeleteProductModal } from "../pages/DashboardAdminProducts/components/DeleteProductModal";
import { CreateCategoryModal } from "../pages/DashboardAdminCategories/components/CreateCategoryModal";
import { EditCategoryModal } from "../pages/DashboardAdminCategories/components/EditCategoryModal";
import { DeleteCategoryModal } from "../pages/DashboardAdminCategories/components/DeleteCategoryModal";
import { CreateSubcategoryModal } from "../pages/DashboardAdminCategories/components/CreateSubcategoryModal";
import { EditSubcategoryModal } from "../pages/DashboardAdminCategories/components/EditSubcategoryModal";
import { DeleteSubcategoryModal } from '../pages/DashboardAdminCategories/components/DeleteSubcategoryModal';

// Category



export const useModalHandlers = () => {
  const { openModal } = useModalStore();

  // Product
  const handleCreateProduct = () => {
    const content = <CreateProductModal />;
    openModal("Crear Producto", content);
  };

  const handleEditProduct = (product: any) => {
    const content = <EditProductModal product={product} />;
    openModal("Editar Producto", content);
  };

  const handleDeleteProduct = (productName: any) => {
    const content = <DeleteProductModal productName={productName} />;
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
  };
};