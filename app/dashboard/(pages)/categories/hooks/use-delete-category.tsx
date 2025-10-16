import { useState } from "react";
import { deleteCategoryService } from "../services/category-service";

const useDeleteCategory = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const deleteCategory = async (id: string) => {
    setIsLoading(true);
    try {
      // Call API to delete category
      await deleteCategoryService(id);
    } catch (error) {
      // Handle error
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteCategory, isLoading };
};

export default useDeleteCategory;
