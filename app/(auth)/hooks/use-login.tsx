import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../types/validations";
import { loginService } from "../services/auth-service";
import { useState } from "react";
import { LoginResponseAuth } from "../types/response";
import { AxiosError } from "axios";

import { handleErrorForm } from "@/lib/handle-error";
import { useAuthStore } from "@/store/auth-store";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { setToken } = useAuthStore();

  const formLogin = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const login = async (
    data: z.infer<typeof loginSchema>
  ): Promise<LoginResponseAuth> => {
    setIsLoading(true);

    try {
      const { access_token } = await loginService(data);
      console.log(access_token);
      setToken(access_token);
      return access_token;
    } catch (error) {
      // handleErrorForm(error, formLogin);
      if (error instanceof AxiosError) {
        formLogin.setError("email", {
          type: "server",
          message: error.response?.data.message || "Server error",
        });
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, formLogin, isLoading };
};

export default useLogin;
