import { Form, FormLabel } from "@/components/ui/form";
import useCreateTicket from "../hooks/use-create-ticket";
import { CreateTicketFormData } from "../types/validation";
import { Button } from "@/components/ui/button";
import FormInputField from "@/components/ui/form-field";
import useListCategories from "../../categories/hooks/use-list-categories";
import TicketLocation from "./ticket-location";
import { ICategory } from "../../categories/types/category";
import { useEffect, useState } from "react";
import { TicketLocationInterface } from "../types/ticket";
import useListCity from "@/hooks/use-list-city";
import { ICity } from "@/types/city";

type FormCreateTicketProps = {
  onCancel: (result: boolean) => void;
  onCreate: ({ result }: { result: boolean }) => void;
};

const FormCreateTicket = ({ onCancel, onCreate }: FormCreateTicketProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [cities, setCities] = useState<ICity[]>([]);

  const { formCreate, createTicket, isLoading } = useCreateTicket();
  const { getCategories } = useListCategories();
  const { isLoading: isLoadingCities, listCities } = useListCity();

  const onSubmit = async (values: CreateTicketFormData) => {
    console.log("vamos a enviar", values);

    const response = await createTicket(values);
    onCreate({ result: true });
  };

  const handleCancel = () => {
    onCancel(true);
  };

  useEffect(() => {
    console.log("Date: ", new Date().toISOString());
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    const fetchCities = async () => {
      const cities = await listCities();
      setCities(cities);
    };

    fetchCategories();
    fetchCities();
  }, []);

  return (
    <Form {...formCreate}>
      <form onSubmit={formCreate.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="">
            {/* <FormInputField
              control={formCreate.control}
              name="title"
              label="Título"
              type="text"
              placeholder="Título del incidente"
            /> */}
          </div>
          <div className="">
            <FormInputField
              control={formCreate.control}
              name="categoryId"
              label="Categoría"
              type="select"
              placeholder="Categoría del incidente"
              options={categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />
          </div>
          <div className="">
            <FormInputField
              control={formCreate.control}
              name="cityId"
              label="Ciudad"
              type="select"
              placeholder="Ciudad del incidente"
              options={cities.map((city) => ({
                label: city.name,
                value: city.id,
              }))}
            />
          </div>
          {/* <div className="flex flex-col md:flex-row gap-3 w-full"> */}

          {/* </div> */}
          <div>
            <FormInputField
              control={formCreate.control}
              name="description"
              label="Descripción"
              type="textarea"
              placeholder="Descripción del incidente"
            />
          </div>
          <div className="space-y-2">
            <FormLabel>Ubicación</FormLabel>
            <TicketLocation
              onLocationChange={(location: TicketLocationInterface) => {
                console.log("Location changed: ", location);
                formCreate.setValue("location", location);
              }}
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
