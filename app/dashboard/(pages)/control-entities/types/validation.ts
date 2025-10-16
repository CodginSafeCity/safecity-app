import { z } from "zod";

//Schema for control center form
export const controlCenterSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
});

export type ControlCenterFormData = z.infer<typeof controlCenterSchema>;

// Register Schema validation
export const registerUserControlEntitySchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    last_name: z.string().min(1, { message: "Last name is required" }),
    email: z.email({ message: "Invalid email address" }),
    password: z.string().min(1, { message: "Password is required" }),
    password_confirmation: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
    roleId: z.string().min(1, { message: "Role is required" }),
    controlEntityId: z
      .string()
      .min(1, { message: "Control Entity is required" }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

export type RegisterUserControlEntityFormData = z.infer<
  typeof registerUserControlEntitySchema
>;
