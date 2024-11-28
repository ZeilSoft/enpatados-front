import { Modal } from "@/components/shared/Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useModalStore } from "@/store/ui.store";
import { useModalHandlers } from "../../hooks/useModalHandlers ";

export const DashboardAdminProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Producto 1",
      price: "$4240",
      category: "Medias",
      subcategory: "Soquetes",
      stock: "Disponible",
      imageUrl: "/messi.jpg"
    },
    {
      id: 2,
      name: "Producto 2",
      price: "$3200",
      category: "Lentes",
      stock: "Agotado",
      imageUrl: "/spiderman.jpg"
    },
    {
      id: 3,
      name: "Producto 3",
      price: "$1500",
      category: "Lentes",
      stock: "Disponible",
      imageUrl: "/messi.jpg"
    },
    {
      id: 4,
      name: "Producto 4",
      price: "$980",
      category: "Medias",
      subcategory: "Soquetes",
      stock: "Disponible",
      imageUrl: "/spiderman.jpg"
    },
    {
      id: 5,
      name: "Producto 5",
      price: "$980",
      category: "Medias",
      subcategory: "3/4",
      stock: "Disponible",
      imageUrl: "/messi.jpg"
    },
    {
      id: 6,
      name: "Producto 6",
      price: "$980",
      category: "Medias",
      subcategory: "3/4",
      stock: "Disponible",
      imageUrl: "/spiderman.jpg"
    },
    {
      id: 7,
      name: "Producto 7",
      price: "$980",
      category: "Lentes",
      stock: "Disponible",
      imageUrl: "/messi.jpg"
    },
    {
      id: 8,
      name: "Producto 8",
      price: "$980",
      category: "Lentes",
      stock: "Disponible",
      imageUrl: "/spiderman.jpg"
    },
    {
      id: 9,
      name: "Producto 9",
      price: "$980",
      category: "Medias",
      subcategory: "3/4",
      stock: "Disponible",
      imageUrl: "/messi.jpg"
    },
    {
      id: 10,
      name: "Producto 10",
      price: "$980",
      category: "Lentes",
      stock: "Disponible",
      imageUrl: "/spiderman.jpg"
    },
    {
      id: 11,
      name: "Producto 11",
      price: "$980",
      category: "Lentes",
      stock: "Disponible",
      imageUrl: "/messi.jpg"
    },
    {
      id: 12,
      name: "Producto 12",
      price: "$980",
      category: "Lentes",
      stock: "Disponible",
      imageUrl: "/spiderman.jpg"
    },
    {
      id: 13,
      name: "Producto 13",
      price: "$980",
      category: "Medias",
      subcategory: "Soquetes",
      stock: "Disponible",
      imageUrl: "/messi.jpg"
    },
    {
      id: 14,
      name: "Producto 14",
      price: "$980",
      category: "Lentes",
      stock: "Disponible",
      imageUrl: "/spiderman.jpg"
    },
    {
      id: 15,
      name: "Producto 15",
      price: "$980",
      category: "Medias",
      subcategory: "Soquetes",
      stock: "Disponible",
      imageUrl: "/messi.jpg"
    },
    {
      id: 16,
      name: "Producto 16",
      price: "$980",
      category: "Lentes",
      stock: "Disponible",
      imageUrl: "/spiderman.jpg"
    },
  ];

  const { modalContent, modalTitle } = useModalStore();
  const { handleCreateProduct, handleEditProduct, handleDeleteProduct } = useModalHandlers();

  return (
    <div className="flex flex-col gap-6 text-white">
      {/* Header */}
      <div className="sticky top-0 p-4 lg:px-6 lg:py-6 flex flex-col border-b border-[#334155] gap-6 z-[7777] bg-[#252D3B] shadow">
        <h1 className="text-4xl font-bold text-center w-auto">PRODUCTOS</h1>

        {/* Searchbar, categories, create */}
        <div className="flex flex-col sm:flex-row gap-3 mx-auto">
          <Input
            type="text" 
            placeholder="Buscar producto" 
            className="border border-[#334155] bg-[#252D3B] focus-visible:ring-2 focus:ring-white focus:outline-none"
          />

          <Select>
            <SelectTrigger className="border border-[#334155] bg-[#252D3B] rounded-md py-2 px-4 focus:ring-offset-0 focus-visible:ring-2 focus:ring-white">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent className="bg-[#252D3B] text-white z-[9999]">
              <SelectItem value="todas">Todas</SelectItem>
              <SelectItem value="medias">Medias</SelectItem>
              <SelectItem value="anteojos">Anteojos</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="border border-[#334155] bg-[#252D3B] rounded-md py-2 px-4 focus:ring-offset-0 focus-visible:ring-2 focus:ring-white">
              <SelectValue placeholder="Subcategoría" />
            </SelectTrigger>
            <SelectContent className="bg-[#252D3B] text-white z-[9999]">
              <SelectItem value="todas">Todas</SelectItem>
              <SelectItem value="soquetes">Soquetes</SelectItem>
              <SelectItem value="3/4">3/4</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="productActions" onClick={handleCreateProduct}>
            CREAR PRODUCTO
          </Button>
        </div>
      </div>

      {/* Grid */}
      <div className="px-4 lg:px-6 pb-4 lg:pb-6 max-w-[1920px] 4xl:w-[1920px] 4xl:mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#252D3B] shadow-lg rounded-lg flex flex-col"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-60 w-full object-cover rounded-t-lg"
              />

              <div className="px-6 py-4 text-sm flex-1">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p>
                  Precio: <span className="font-bold text-green-600">{product.price}</span>
                </p>
                <p>
                  Categoría: <span className="font-medium">{product.category}</span>
                </p>
                {product.subcategory && (
                  <p>
                    Subcategoría: <span className="font-medium">{product.subcategory}</span>
                  </p>
                )}
                <p>
                  Stock: <span className={`font-medium ${
                    product.stock === "Disponible"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}>{product.stock}</span>
                </p>
              </div>

              <div className="flex gap-2 p-4 border-t border-[#334155]">
                <Button className="flex-1" variant="productActions" onClick={() => handleEditProduct(product)}>
                  EDITAR
                </Button>
                <Button className="flex-1" variant="delete" onClick={() => handleDeleteProduct(product.name)}>
                  ELIMINAR
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Renderiza el Modal con contenido dinámico */}
      <Modal className="bg-[#252D3B] p-2" title={modalTitle}>
        {modalContent}
      </Modal>
    </div>
  );
}