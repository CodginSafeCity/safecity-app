import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../types/validations";
import { loginService, loginServiceTest } from "../services/auth-service";
import { useState } from "react";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formLogin = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const login = async (data: z.infer<typeof loginSchema>): Promise<any> => {
    setIsLoading(true);

    try {
      // await loginService(data);
      const response = await loginServiceTest(data);
      return response;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, formLogin, isLoading };
};

export default useLogin;
