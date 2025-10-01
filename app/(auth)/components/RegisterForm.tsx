import { Form } from "@/components/ui/form";
import useRegister from "../hooks/useRegister";
import FormInputField from "@/components/ui/form-field";
import { registerSchema } from "../types/validations";
import { Button } from "@/components/ui/button";
import z from "zod";

const RegisterForm = () => {
  const { formRegister, register, isLoading } = useRegister();

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    await register(values);
  };
  return (
    <Form {...formRegister}>
      <form onSubmit={formRegister.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <div className="flex-1">
              <FormInputField
                control={formRegister.control}
                name="name"
                label="Nombres"
                type="text"
                placeholder="Jhon Doe"
              />
            </div>
            <div className="flex-1">
              <FormInputField
                control={formRegister.control}
                name="last_name"
                label="Apellidos"
                type="text"
                placeholder="Smith Williams"
              />
            </div>
          </div>
          <div className="grid gap-3">
            <FormInputField
              control={formRegister.control}
              name="email"
              label="Correo electrónico"
              type="email"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>
          <div className="grid gap-3">
            <FormInputField
              control={formRegister.control}
              name="password"
              label="Contraseña"
              type="password"
              placeholder="**********"
            />
          </div>
          <div className="grid gap-3">
            <FormInputField
              control={formRegister.control}
              name="password_confirmation"
              label="Confirmar contraseña"
              type="password"
              placeholder="**********"
            />
          </div>
          <div className="grid gap-3">
            <Button
              size={"lg"}
              type="submit"
              className="cursor-pointer"
              disabled={isLoading}
            >
              Crear cuenta
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
