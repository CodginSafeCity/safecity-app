import { ApiResponse, httpRequest } from "@/lib/http-request";
import { ICategory } from "../types/category";
import { CreateCategoryType } from "../types/validation";

export const getCategoriesService = async (): Promise<
  ApiResponse<ICategory[]>
> => {
  return httpRequest({
    url: "/incident-categories",
    method: "GET",
  });
};

export const createCategoryService = async (
  data: Partial<CreateCategoryType>
): Promise<ApiResponse<ICategory>> => {
  return httpRequest({
    url: `/incident-categories`,
    method: "POST",
    data,
  });
};

export const updateCategoryService = async (
  categoryId: string,
  data: Partial<CreateCategoryType>
): Promise<ApiResponse<ICategory>> => {
  return httpRequest({
    url: `/incident-categories/${categoryId}`,
    method: "PUT",
    data,
  });
};

export const deleteCategoryService = async (
  categoryId: string
): Promise<void> => {
  return httpRequest({
    url: `/incident-categories/${categoryId}`,
    method: "DELETE",
  });
};
