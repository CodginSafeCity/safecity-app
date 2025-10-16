import { useState } from "react";
import { getCategoriesService } from "../services/category-service";
import { ICategory } from "../types/category";

const useListCategories = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCategories = async (): Promise<ICategory[]> => {
    setIsLoading(true);
    try {
      // fetch categories from API
      const response = await getCategoriesService();
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { getCategories, isLoading };
};

export default useListCategories;
