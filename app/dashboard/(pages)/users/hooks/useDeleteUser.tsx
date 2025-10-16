import { useState } from "react";
import { deleteUserService } from "../services/user-service";

export const useDeleteUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const deleteUser = async (userId: string) => {
    setIsLoading(true);
    try {
      await deleteUserService(userId);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, deleteUser };
};
