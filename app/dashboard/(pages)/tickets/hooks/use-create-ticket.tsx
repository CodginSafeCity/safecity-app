import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTicketFormData, createTicketSchema } from "../types/validation";
import { useState } from "react";
import { createIncidentService } from "../services/incident-service";
import useUserAuth from "@/app/(auth)/hooks/use-user-auth";

const useCreateTicket = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { userAuth } = useUserAuth();

  if (!userAuth) {
    throw new Error("User not authenticated");
  }

  const formCreate = useForm<z.infer<typeof createTicketSchema>>({
    resolver: zodResolver(createTicketSchema),
    defaultValues: {
      userId: userAuth.id,
      title: "",
      description: "",
      categoryId: "",
      cityId: "",
      location: {
        type: "Point",
        coordinates: [0, 0],
      },
      reported_at: new Date().toISOString(),
      verified_at: new Date().toISOString(),
    },
  });

  console.log("Form errors:", formCreate.formState.errors);

  const createTicket = async (data: CreateTicketFormData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      const response = await createIncidentService(data);
      console.log("Ticket created:", response);
      return response.data;
    } catch (error) {
      console.error("Error creating ticket:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { formCreate, createTicket, isLoading };
};

export default useCreateTicket;
