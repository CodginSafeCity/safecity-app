import { categories } from "../data/categories";
import { CategoryWithId } from "../types/category";

const useListCategories = () => {
  const getCategories = async (): Promise<CategoryWithId[]> => {
    // fetch categories from API
    return categories;
  };

  return { getCategories };
};

export default useListCategories;
