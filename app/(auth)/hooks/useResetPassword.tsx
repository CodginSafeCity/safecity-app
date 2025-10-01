import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema, loginSchema } from "../types/validations";

const useResetPassword = () => {
  const formResetPassword = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
      token: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });
  const resetPassword = (data: z.infer<typeof resetPasswordSchema>) => {};

  return { resetPassword, formResetPassword };
};

export default useResetPassword;
