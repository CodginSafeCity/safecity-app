import { Form, FormField, FormLabel } from "@/components/ui/form";
import UseCreateZoneControlEntity from "./hooks/users/use-create-zone-control-entity";
import { areaCoordinate, CreateZoneFormData } from "./types/validation";
import FormInputField from "@/components/ui/form-field";
import MapComponent from "./components/map-component";
import useListCity from "@/hooks/use-list-city";
import { useEffect, useState } from "react";
import { ICity } from "@/types/city";
import { Button } from "@/components/ui/button";

type FormCreateZoneProps = {
  controlEntityId: string;
};
export default function FormCreateZone({
  controlEntityId,
}: FormCreateZoneProps) {
  const [cities, setCities] = useState<ICity[]>([]);

  const { formCreateZone, createZone, isLoading } = UseCreateZoneControlEntity({
    controlEntityId,
  });

  // console.log("Control Entity ID in FormCreateZone: ", controlEntityId);
  const { isLoading: isLoadingCities, listCities } = useListCity();

  const handleCreateZone = async (values: CreateZoneFormData) => {
    console.log("Created Zone: ", values);
    const zone = await createZone(values);
  };

  const fetchCities = async () => {
    const cities = await listCities();
    setCities(cities);
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <Form {...formCreateZone}>
      <form onSubmit={formCreateZone.handleSubmit(handleCreateZone)}>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <FormInputField
                control={formCreateZone.control}
                name="name"
                label="Name"
                type="text"
                placeholder="Zone Name"
              />
            </div>
            <div>
              <FormInputField
                control={formCreateZone.control}
                name="cityId"
                label="Ciudad"
                type="select"
                placeholder="Zone Name"
                options={cities.map((city) => ({
                  label: city.name,
                  value: city.id,
                }))}
              />
            </div>
          </div>
          <div>
            <FormLabel className="mb-2">Zona</FormLabel>
            <MapComponent
              onCreate={(e: any) => {
                console.log("Polygon created: ", [e.coordinates]);
                formCreateZone.setValue("area", {
                  type: "Polygon",
                  coordinates: [e.coordinates],
                });
              }}
            />
          </div>
          <div>
            <Button
              variant={"default"}
              type="submit"
              className="cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? "Creating..." : "Crear Zona"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
