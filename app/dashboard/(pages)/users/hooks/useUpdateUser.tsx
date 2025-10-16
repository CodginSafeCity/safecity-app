import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserSchema, UpdateUserType } from "../types/validation";
import { IUser } from "../types/user";
import { useState } from "react";
import { updateUserService } from "../services/user-service";

interface UpdateUserProps {
  defaultValues?: Partial<IUser>;
}

const useUpdateUser = ({ defaultValues }: UpdateUserProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formUpdate = useForm<UpdateUserType>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: defaultValues?.name || "",
      last_name: defaultValues?.last_name || "",
      email: defaultValues?.email || "",
    },
  });
  const update = async (id: string, data: UpdateUserType) => {
    setIsLoading(true);
    try {
      const response = await updateUserService(id, data);
      return response;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { update, formUpdate, isLoading };
};

export default useUpdateUser;
