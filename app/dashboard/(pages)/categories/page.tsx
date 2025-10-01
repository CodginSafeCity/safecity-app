"use client";
import CategoryListTable from "./components/(table)/list-category-table";
import CreateCategoryModal from "./components/create-category-modal";

export default function CategoryPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">Gestión de Categorías</h1>
          <span className="text-sm text-gray-600">
            Esta es la página de gestión de categorías.
          </span>
        </div>
        <div>
          <CreateCategoryModal />
        </div>
      </div>
      <div>
        <CategoryListTable />
      </div>
    </>
  );
}
