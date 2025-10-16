import FormInputField from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useCreateControlEntity from "../hooks/use-create-control-center";
import { ControlCenterFormData } from "../types/validation";

type FormCreateUserProps = {
  onCancel: (result: boolean) => void;
  onCreate: ({ result }: { result: boolean }) => void;
};

export default function FormCreateControlEntity({
  onCancel,
  onCreate,
}: FormCreateUserProps) {
  const { formCreate, isLoading, createControlEntity } =
    useCreateControlEntity();

  const onSubmit = async (values: ControlCenterFormData) => {
    console.log(values);
    await createControlEntity(values);
    onCreate({ result: true });
    window.location.reload();
  };

  const handleCancel = () => {
    onCancel(true);
  };

  return (
    <Form {...formCreate}>
      <form onSubmit={formCreate.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-3">
            <FormInputField
              control={formCreate.control}
              name="name"
              label="Nombre"
              type="text"
              placeholder="Incendcio"
            />
          </div>
          <div className="grid gap-3">
            <FormInputField
              control={formCreate.control}
              name="address"
              label="Dirección"
              type="text"
              placeholder="Dirección del centro de control"
            />
          </div>
          <div className="grid gap-3">
            <FormInputField
              control={formCreate.control}
              name="phone"
              label="Teléfono"
              type="text"
              placeholder="Teléfono del centro de control"
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
}
