import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { controlCenterSchema } from "../types/validation";

const useCreateControlCenter = () => {
  const formCreate = useForm<z.infer<typeof controlCenterSchema>>({
    resolver: zodResolver(controlCenterSchema),
    defaultValues: {
      name: "",
      address: "",
      phone: "",
    },
  });

  return { formCreate };
};

export default useCreateControlCenter;
