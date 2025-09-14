import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../types/validations";

const useLogin = () => {
  const formLogin = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });
  const login = (data: z.infer<typeof loginSchema>) => {};

  return { login, formLogin };
};

export default useLogin;
