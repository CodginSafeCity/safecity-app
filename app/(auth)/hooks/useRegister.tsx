import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../types/validations";
import { registerService } from "../services/auth-service";
import { useState } from "react";
import { AxiosError } from "axios";

const useRegister = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const formRegister = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      roleId: process.env.NEXT_PUBLIC_ROLE_USER_ID || "",
    },
  });
  const register = async (
    data: z.infer<typeof registerSchema>
  ): Promise<any> => {
    setIsLoading(true);
    try {
      const response = await registerService(data);
      setIsRegistered(true);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        formRegister.setError("email", {
          type: "server",
          message: error.response?.data.message || "Server error",
        });
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { register, formRegister, isLoading, isRegistered };
};

export default useRegister;
