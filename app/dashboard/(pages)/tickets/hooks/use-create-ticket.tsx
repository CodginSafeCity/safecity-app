import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTicketSchema } from "../types/validation";

const useCreateTicket = () => {
  const formCreate = useForm<z.infer<typeof createTicketSchema>>({
    resolver: zodResolver(createTicketSchema),
    defaultValues: {
      title: "",
      description: "",
      categoryId: "",
      cityId: "",
      location: {
        type: "Point",
        coordinates: [0, 0],
      },
    },
  });

  return { formCreate };
};

export default useCreateTicket;
