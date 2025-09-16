import z from "zod";
import { updateUserSchema } from "../types/validation";
import FormInputField from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useUpdateUser from "../hooks/useUpdateUser";

type FormUpdateUserProps = {
  onCancel: (result: boolean) => void;
  onUpdate: ({ result }: { result: boolean }) => void;
};
const FormUpdateUser = ({ onCancel, onUpdate }: FormUpdateUserProps) => {
  const { formUpdate, update } = useUpdateUser();

  const onSubmit = (values: z.infer<typeof updateUserSchema>) => {
    console.log(values);
    onUpdate({ result: true });
  };

  const handleCancel = () => {
    onCancel(true);
  };

  return (
    <Form {...formUpdate}>
      <form onSubmit={formUpdate.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <div className="flex-1">
              <FormInputField
                control={formUpdate.control}
                name="name"
                label="Nombres"
                type="text"
                placeholder="Jhon Doe"
              />
            </div>
            <div className="flex-1">
              <FormInputField
                control={formUpdate.control}
                name="lastName"
                label="Apellidos"
                type="text"
                placeholder="Smith Williams"
              />
            </div>
          </div>
          <div className="grid gap-3">
            <FormInputField
              control={formUpdate.control}
              name="email"
              label="Correo electrónico"
              type="email"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>
          <div className="grid gap-3">
            <FormInputField
              control={formUpdate.control}
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
          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant={"secondary"}
              className="cursor-pointer"
              onClick={handleCancel}
            >
              Cancelar
            </Button>
            <Button size={"lg"} type="submit" className="cursor-pointer">
              Actualizar
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FormUpdateUser;
