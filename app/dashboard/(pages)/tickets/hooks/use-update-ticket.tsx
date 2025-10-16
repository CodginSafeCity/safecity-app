import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  UpdateStateTicketFormData,
  updateStateTicketSchema,
} from "../types/validation";
import { useState } from "react";
import { updateStatusService } from "../services/incident-service";
import { IIncident } from "../types/ticket";

const useUpdateStatusTicket = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formUpdate = useForm<z.infer<typeof updateStateTicketSchema>>({
    resolver: zodResolver(updateStateTicketSchema),
    defaultValues: {
      status: "OPEN",
    },
  });

  const updateStateTicket = async (
    id: string,
    data: UpdateStateTicketFormData
  ): Promise<IIncident> => {
    try {
      const response = await updateStatusService(id, data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { formUpdate, updateStateTicket, isLoading };
};

export default useUpdateStatusTicket;
