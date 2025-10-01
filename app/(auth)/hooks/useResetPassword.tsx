import { useForm } from "react-hook-form";
import z, { set } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema, loginSchema } from "../types/validations";
import { resetPasswordService } from "../services/auth-service";
import { useState } from "react";

const useResetPassword = () => {
  const [isUpdatingPassword, setIsUpdatingPassword] = useState<boolean>(false);

  const formResetPassword = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
      token: "",
      password: "",
      password_confirmation: "",
    },
  });
  const resetPassword = async (data: z.infer<typeof resetPasswordSchema>) => {
    setIsUpdatingPassword(true);
    try {
      await resetPasswordService(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  return { resetPassword, formResetPassword, isUpdatingPassword };
};

export default useResetPassword;
