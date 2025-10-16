import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterUserControlEntityFormData,
  registerUserControlEntitySchema,
} from "../../../types/validation";
import { useState } from "react";
import { saveUserControlEntitiesService } from "../../service/control-entity-service";

type Props = {
  controlEntityId: string;
};
const useCreateUserControlEntity = ({ controlEntityId }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formRegister = useForm<z.infer<typeof registerUserControlEntitySchema>>(
    {
      resolver: zodResolver(registerUserControlEntitySchema),
      defaultValues: {
        name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        roleId: process.env.NEXT_PUBLIC_ROLE_VERIFY_ID,
        controlEntityId: controlEntityId,
      },
    }
  );
  const register = async (
    controlEntityId: string,
    data: RegisterUserControlEntityFormData
  ) => {
    setIsLoading(true);

    try {
      const response = await saveUserControlEntitiesService(
        controlEntityId,
        data
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { register, formRegister, isLoading };
};

export default useCreateUserControlEntity;
