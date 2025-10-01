import z from "zod";
import useCreateCategory from "../../hooks/use-create-category";
import { createCategorySchema } from "../../types/validation";
import FormInputField from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

type FormCreateUserProps = {
  onCancel: (result: boolean) => void;
  onCreate: ({ result }: { result: boolean }) => void;
};

export default function FormCreateCategory({
  onCancel,
  onCreate,
}: FormCreateUserProps) {
  const { formCreate } = useCreateCategory();

  const onSubmit = (values: z.infer<typeof createCategorySchema>) => {
    console.log(values);

    onCreate({ result: true });
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
              name="description"
              label="Descripción"
              type="textarea"
              placeholder="Descripción de la categoría"
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
            <Button size={"lg"} type="submit" className="cursor-pointer">
              Crear
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
