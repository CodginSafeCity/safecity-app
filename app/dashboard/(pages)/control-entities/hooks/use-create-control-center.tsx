import z, { set } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ControlCenterFormData,
  controlCenterSchema,
} from "../types/validation";
import { useState } from "react";
import { createControlEntityService } from "../service/control-entity-service";

const useCreateControlEntity = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formCreate = useForm<z.infer<typeof controlCenterSchema>>({
    resolver: zodResolver(controlCenterSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
    },
  });

  const createControlEntity = async (data: ControlCenterFormData) => {
    setIsLoading(true);

    try {
      const response = await createControlEntityService(data);
      return response.data; // Replace with actual response from your service
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { formCreate, createControlEntity, isLoading };
};

export default useCreateControlEntity;
