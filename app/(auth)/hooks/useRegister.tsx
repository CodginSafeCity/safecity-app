import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../types/validations";

const useRegister = () => {
  const formRegister = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const register = (data: z.infer<typeof registerSchema>) => {};

  return { register, formRegister };
};

export default useRegister;
