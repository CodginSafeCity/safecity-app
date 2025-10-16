import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  updatePasswordUserSchema,
  UpdatePasswordUserType,
} from "../types/validation";
import { useState } from "react";
import { updatePasswordUserService } from "../services/user-service";

const useUpdatePasswordUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formUpdate = useForm<UpdatePasswordUserType>({
    resolver: zodResolver(updatePasswordUserSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const updatePassword = async (id: string, data: UpdatePasswordUserType) => {
    setIsLoading(true);
    try {
      const response = await updatePasswordUserService(id, data);
      return response.data;
    } catch (error) {
      console.error("Error updating password:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { updatePassword, formUpdate, isLoading };
};

export default useUpdatePasswordUser;
