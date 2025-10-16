import { ApiResponse, httpRequest } from "@/lib/http-request";
import { IUser } from "../types/user";
import { UpdatePasswordUserType, UpdateUserType } from "../types/validation";

export const getUsersService = async (): Promise<ApiResponse<IUser[]>> => {
  return httpRequest({
    url: "/users",
    method: "GET",
  });
};

export const getUserService = async (
  userId: string
): Promise<ApiResponse<IUser>> => {
  return httpRequest({
    url: `/users/${userId}`,
    method: "GET",
  });
};

export const updateUserService = async (
  userId: string,
  data: Partial<UpdateUserType>
): Promise<ApiResponse<IUser>> => {
  return httpRequest({
    url: `/users/${userId}`,
    method: "PUT",
    data,
  });
};

export const updatePasswordUserService = async (
  userId: string,
  data: Partial<UpdatePasswordUserType>
): Promise<ApiResponse<IUser>> => {
  return httpRequest({
    url: `/users/${userId}`,
    method: "PUT",
    data,
  });
};

export const deleteUserService = async (userId: string): Promise<void> => {
  return httpRequest({
    url: `/users/${userId}`,
    method: "DELETE",
  });
};
