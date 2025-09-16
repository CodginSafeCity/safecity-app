import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserSchema } from "../types/validation";

const useUpdateUser = () => {
  const formUpdate = useForm<z.infer<typeof updateUserSchema>>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      role_id: 0,
    },
  });
  const update = (data: z.infer<typeof updateUserSchema>) => {};

  return { update, formUpdate };
};

export default useUpdateUser;
