import z from "zod";
import { resetPasswordSchema } from "../types/validations";
import FormInputField from "@/components/ui/form-field";
import useResetPassword from "../hooks/useResetPassword";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface ResetPasswordFormProps {
  isResetPassword: (state: boolean) => void;
}

const ResetPasswordForm = ({ isResetPassword }: ResetPasswordFormProps) => {
  const { resetPassword, formResetPassword, isUpdatingPassword } =
    useResetPassword();

  const params = useSearchParams();

  const email = params.get("email");
  const token = params.get("token");

  const onSubmit = async (values: z.infer<typeof resetPasswordSchema>) => {
    try {
      await resetPassword(values);
      isResetPassword(true);
    } catch (error) {
      isResetPassword(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (email) {
      formResetPassword.setValue("email", email);
    }
    if (token) {
      formResetPassword.setValue("token", token);
    }
  }, [email, token, formResetPassword]);

  return (
    <Form {...formResetPassword}>
      <form onSubmit={formResetPassword.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-3">
            <FormInputField
              control={formResetPassword.control}
              name="email"
              label="Correo electrónico"
              type="text"
              placeholder="tucorreo@ejemplo.com"
              disabled={true}
            />
          </div>
          <div className="grid gap-3">
            <FormInputField
              control={formResetPassword.control}
              name="password"
              label="Nueva contraseña"
              type="password"
              placeholder="**********"
            />
          </div>
          <div className="grid gap-3">
            <FormInputField
              control={formResetPassword.control}
              name="password_confirmation"
              label="Confirmar nueva contraseña"
              type="password"
              placeholder="**********"
            />
          </div>
          <div className="grid gap-3">
            <Button
              size={"lg"}
              type="submit"
              disabled={isUpdatingPassword}
              className="cursor-pointer"
            >
              {isUpdatingPassword ? "Actualizando..." : "Actualizar contraseña"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
