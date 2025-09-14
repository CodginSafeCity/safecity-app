import { Form } from "@/components/ui/form";
import { forgotPasswordSchema } from "../types/validations";
import z from "zod";
import useForgotPassword from "../hooks/useForgotPassword";
import FormInputField from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";

const ForgotPasswordForm = () => {
  const { formForgotPassword, sendResetLink } = useForgotPassword();
  const onSubmit = (values: z.infer<typeof forgotPasswordSchema>) => {
    console.log(values);
  };
  return (
    <Form {...formForgotPassword}>
      <form onSubmit={formForgotPassword.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-3">
            <FormInputField
              control={formForgotPassword.control}
              name="email"
              label="Correo electrónico"
              type="text"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>
          <div className="grid gap-3">
            <Button size={"lg"} type="submit">
              Enviar enlace de restablecimiento
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
