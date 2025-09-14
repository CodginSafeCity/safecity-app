import z from "zod";
import { resetPasswordSchema } from "../types/validations";
import FormInputField from "@/components/ui/form-field";
import useResetPassword from "../hooks/useResetPassword";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

const ResetPasswordForm = () => {
  const { resetPassword, formResetPassword } = useResetPassword();
  const onSubmit = (values: z.infer<typeof resetPasswordSchema>) => {
    console.log(values);
  };
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
              name="newPassword"
              label="Nueva contraseña"
              type="password"
              placeholder="**********"
            />
          </div>
          <div className="grid gap-3">
            <FormInputField
              control={formResetPassword.control}
              name="confirmNewPassword"
              label="Confirmar nueva contraseña"
              type="password"
              placeholder="**********"
            />
          </div>
          <div className="grid gap-3">
            <Button size={"lg"} type="submit">
              Actualizar contraseña
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
