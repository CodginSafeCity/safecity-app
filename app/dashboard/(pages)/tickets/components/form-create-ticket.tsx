import { Form, FormLabel } from "@/components/ui/form";
import useCreateTicket from "../hooks/use-create-ticket";
import useCreateUser from "../../users/hooks/useCreateUser";
import { createTicketSchema } from "../types/validation";
import z from "zod";
import { Button } from "@/components/ui/button";
import FormInputField from "@/components/ui/form-field";
import useListCategories from "../../categories/hooks/use-list-categories";
import TicketLocation from "./ticket-location";

type FormCreateTicketProps = {
  onCancel: (result: boolean) => void;
  onCreate: ({ result }: { result: boolean }) => void;
};

const FormCreateTicket = ({ onCancel, onCreate }: FormCreateTicketProps) => {
  const { formCreate } = useCreateTicket();
  const { getCategories } = useListCategories();

  const onSubmit = (values: z.infer<typeof createTicketSchema>) => {
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
          <div className="">
            <FormInputField
              control={formCreate.control}
              name="title"
              label="Título"
              type="text"
              placeholder="Título del incidente"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <div className="">
              <FormInputField
                control={formCreate.control}
                name="categoryId"
                label="Categoría"
                type="select"
                placeholder="Categoría del incidente"
                options={[]}
              />
            </div>
          </div>
          <div className="space-y-2">
            <FormLabel>Ubicación</FormLabel>
            <TicketLocation
              onLocationChange={(location) => console.log(location)}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <div className="flex-1">
              <FormInputField
                control={formCreate.control}
                name="departmentId"
                label="Departamento"
                type="select"
                placeholder="Departamento del incidente"
                options={[]}
              />
            </div>
            <div className="flex-1">
              <FormInputField
                control={formCreate.control}
                name="cityId"
                label="Ciudad"
                type="select"
                placeholder="Ciudad del incidente"
                options={[]}
              />
            </div>
          </div>
          <div>
            <FormInputField
              control={formCreate.control}
              name="description"
              label="Descripción"
              type="textarea"
              placeholder="Descripción del incidente"
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
};

export default FormCreateTicket;
