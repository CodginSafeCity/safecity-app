import FormInputField from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useCreateUserControlEntity from "../hooks/users/use-create-user-entity-control";
import { RegisterUserControlEntityFormData } from "../../types/validation";

type FormCreateUserProps = {
  controlEntityId: string;
  onCancel: (result: boolean) => void;
  onCreate: ({ result }: { result: boolean }) => void;
};

const FormCreateUser = ({
  onCancel,
  onCreate,
  controlEntityId,
}: FormCreateUserProps) => {
  const { formRegister, register, isLoading } = useCreateUserControlEntity({
    controlEntityId,
  });

  const onSubmit = async (values: RegisterUserControlEntityFormData) => {
    await register(controlEntityId, values);
    onCreate({ result: true });
    window.location.reload();
  };

  const handleCancel = () => {
    onCancel(true);
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
          <div className="flex justify-end gap-3">
            <Button
              onClick={handleCancel}
              type="button"
              variant={"secondary"}
              size={"lg"}
              className="cursor-pointer"
            >
              Cancelar
            </Button>
            <Button
              size={"lg"}
              type="submit"
              className="cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? "Creando..." : "Crear"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FormCreateUser;
