import z from "zod";
import { updateUserSchema, UpdateUserType } from "../types/validation";
import FormInputField from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useUpdateUser from "../hooks/useUpdateUser";
import { IUser } from "../types/user";

type FormUpdateUserProps = {
  user: IUser;
  onCancel: (result: boolean) => void;
  onUpdate: ({ result }: { result: boolean }) => void;
};
const FormUpdateUser = ({ user, onCancel, onUpdate }: FormUpdateUserProps) => {
  const { formUpdate, update, isLoading } = useUpdateUser({
    defaultValues: user,
  });

  const onSubmit = async (values: UpdateUserType) => {
    await update(user.id, values);

    window.location.reload();
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
              />
            </div>
            <div className="flex-1">
              <FormInputField
                control={formUpdate.control}
                name="last_name"
                label="Apellidos"
                type="text"
              />
            </div>
          </div>
          <div className="grid gap-3">
            <FormInputField
              control={formUpdate.control}
              name="email"
              label="Correo electrónico"
              type="email"
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
            <Button
              size={"lg"}
              type="submit"
              className="cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? "Actualizando..." : "Actualizar"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FormUpdateUser;
