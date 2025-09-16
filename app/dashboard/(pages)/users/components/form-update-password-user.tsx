import z from "zod";
import { updatePasswordUserSchema } from "../types/validation";
import FormInputField from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useUpdatePasswordUser from "../hooks/useUpdatePasswordUser";

type FormUpdatePasswordType = {
  onCancel: (result: boolean) => void;
  onUpdate: ({ result }: { result: boolean }) => void;
};
const FormUpdatePasswordUser = ({
  onCancel,
  onUpdate,
}: FormUpdatePasswordType) => {
  const { formUpdate, update } = useUpdatePasswordUser();

  const onSubmit = (values: z.infer<typeof updatePasswordUserSchema>) => {
    console.log(values);
  };

  const handleCancel = () => {
    onCancel(true);
  };
  return (
    <Form {...formUpdate}>
      <form onSubmit={formUpdate.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-3">
            <FormInputField
              control={formUpdate.control}
              name="password"
              label="Contraseña"
              type="password"
              placeholder="**********"
            />
          </div>
          <div className="grid gap-3">
            <FormInputField
              control={formUpdate.control}
              name="confirmPassword"
              label="Confirmar contraseña"
              type="password"
              placeholder="**********"
            />
          </div>
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant={"secondary"}
              size={"lg"}
              className="cursor-pointer"
              onClick={handleCancel}
            >
              Cancelar
            </Button>
            <Button
              size={"lg"}
              className="cursor-pointer"
              variant={"default"}
              type="submit"
            >
              Actualizar
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FormUpdatePasswordUser;
