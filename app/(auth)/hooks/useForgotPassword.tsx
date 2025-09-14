import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, loginSchema } from "../types/validations";

const useForgotPassword = () => {
  const formForgotPassword = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });
  const sendResetLink = (data: z.infer<typeof forgotPasswordSchema>) => {};

  return { sendResetLink, formForgotPassword };
};

export default useForgotPassword;
