import { useForm } from "react-hook-form";
import z from "zod";
import { CreateZoneFormData, CreateZoneSchema } from "../../types/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { saveZoneControlEntitiesService } from "../../service/control-entity-service";

type UseCreateZoneControlEntityReturn = {
  controlEntityId: string;
};
export default function UseCreateZoneControlEntity({
  controlEntityId,
}: UseCreateZoneControlEntityReturn) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formCreateZone = useForm<z.infer<typeof CreateZoneSchema>>({
    resolver: zodResolver(CreateZoneSchema),
    defaultValues: {
      name: "",
      controlEntityId: controlEntityId,
      cityId: "",
      area: {
        type: "Polygon",
        coordinates: [
          [
            [0, 0],
            [0, 0],
          ],
        ],
      },
    },
  });

  const createZone = async (data: CreateZoneFormData) => {
    setIsLoading(true);
    try {
      const response = await saveZoneControlEntitiesService(data);
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { formCreateZone, createZone, isLoading };
}
