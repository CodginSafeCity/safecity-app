import z from "zod";
import useCreateUser from "../hooks/useCreateUser";
import { createsUserSchema } from "../types/validation";
import FormInputField from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

const FormCreateUser = () => {
  const { formRegister, register } = useCreateUser();

  const onSubmit = (values: z.infer<typeof createsUserSchema>) => {
    console.log(values);
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
                name="lastName"
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
              name="confirmPassword"
              label="Confirmar contraseña"
              type="password"
              placeholder="**********"
            />
          </div>
          <div className="grid gap-3">
            <FormInputField
              control={formRegister.control}
              name="role_id"
              label="Rol"
              type="select"
              placeholder="Selecciona un rol"
              options={[
                { label: "reportador", value: "reporter" },
                { label: "verificador", value: "verifier" },
              ]}
            />
          </div>
          <div className="grid gap-3">
            <Button size={"lg"} type="submit">
              Crear usuario
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FormCreateUser;
