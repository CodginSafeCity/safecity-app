import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCategorySchema, CreateCategoryType } from "../types/validation";
import { createCategoryService } from "../services/category-service";
import { useState } from "react";

const useCreateCategory = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formCreate = useForm<z.infer<typeof createCategorySchema>>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const createCategory = async (data: CreateCategoryType) => {
    setIsLoading(true);
    try {
      // Call your API or service to create the category
      const response = await createCategoryService(data);
      return response.data;
    } catch (error) {
      // Handle error
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { formCreate, createCategory, isLoading };
};

export default useCreateCategory;
