import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../types/validations";
import { registerService } from "../services/auth-service";
import { useState } from "react";
import { handleErrorForm } from "@/lib/handle-error";
import { AxiosError } from "axios";

const useRegister = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formRegister = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });
  const register = async (
    data: z.infer<typeof registerSchema>
  ): Promise<any> => {
    setIsLoading(true);
    try {
      const response = await registerService(data);
      return response;
    } catch (error) {
      // handleErrorForm(formRegister, error);

      if (error instanceof AxiosError) {
        if (error.status === 422) {
          const actionErrors = error.response?.data.errors;

          Object.keys(actionErrors).forEach((field) => {
            formRegister.setError(field as any, {
              type: "server",
              message: actionErrors[field],
            });
          });
        }
      }

      console.log(formRegister.formState.errors);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { register, formRegister, isLoading };
};

export default useRegister;
