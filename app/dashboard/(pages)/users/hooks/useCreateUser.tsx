import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createsUserSchema } from "../types/validation";

const useCreateUser = () => {
  const formRegister = useForm<z.infer<typeof createsUserSchema>>({
    resolver: zodResolver(createsUserSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role_id: 0,
    },
  });
  const register = (data: z.infer<typeof createsUserSchema>) => {};

  return { register, formRegister };
};

export default useCreateUser;
