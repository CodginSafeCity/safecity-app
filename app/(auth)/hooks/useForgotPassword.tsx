import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "../types/validations";
import { useState } from "react";
import { sendResetLinkService } from "../services/auth-service";

const useForgotPassword = () => {
  const [isSending, setIsSending] = useState<boolean>(false);

  const formForgotPassword = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const sendResetLink = async (data: z.infer<typeof forgotPasswordSchema>) => {
    setIsSending(true);
    try {
      await sendResetLinkService(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSending(false);
    }
  };

  return { sendResetLink, formForgotPassword, isSending };
};

export default useForgotPassword;
