import z from "zod";
import {
  createCategorySchema,
  CreateCategoryType,
} from "../../types/validation";
import FormInputField from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useUpdateCategory from "../../hooks/use-update-category";
import { ICategory } from "../../types/category";
import { is } from "zod/v4/locales";

type FormEditCategoryProps = {
  category: ICategory;
  onCancel: (result: boolean) => void;
  onUpdate: ({ result }: { result: boolean }) => void;
};

export default function FormEditCategory({
  category,
  onCancel,
  onUpdate,
}: FormEditCategoryProps) {
  const { formUpdate, updateCategory, isLoading } = useUpdateCategory({
    defaultValues: category,
  });

  const onSubmit = async (values: CreateCategoryType) => {
    console.log(values);
    await updateCategory(category.id, values);
    onUpdate({ result: true });
    window.location.reload();
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
              name="name"
              label="Nombre"
              type="text"
              placeholder="Incendcio"
            />
          </div>
          <div className="grid gap-3">
            <FormInputField
              control={formUpdate.control}
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
}
