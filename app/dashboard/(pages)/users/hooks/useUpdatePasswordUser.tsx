import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updatePasswordUserSchema } from "../types/validation";

const useUpdatePasswordUser = () => {
  const formUpdate = useForm<z.infer<typeof updatePasswordUserSchema>>({
    resolver: zodResolver(updatePasswordUserSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const update = (data: z.infer<typeof updatePasswordUserSchema>) => {};

  return { update, formUpdate };
};

export default useUpdatePasswordUser;
