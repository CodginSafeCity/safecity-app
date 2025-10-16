import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCategorySchema, CreateCategoryType } from "../types/validation";
import { useState } from "react";
import { updateCategoryService } from "../services/category-service";
import { ICategory } from "../types/category";

interface UpdateCategoryProps {
  defaultValues?: Partial<ICategory>;
}

const useUpdateCategory = ({ defaultValues }: UpdateCategoryProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formUpdate = useForm<z.infer<typeof createCategorySchema>>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      name: defaultValues?.name || "",
      description: defaultValues?.description || "",
    },
  });

  const updateCategory = async (id: string, data: CreateCategoryType) => {
    setIsLoading(true);
    try {
      // Call your API or service to update the category
      const response = await updateCategoryService(id, data);
      return response.data;
    } catch (error) {
      // Handle error
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { formUpdate, updateCategory, isLoading };
};

export default useUpdateCategory;
