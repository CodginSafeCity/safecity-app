import { z } from "zod";

// Schema for ticket creation form
export const createTicketSchema = z.object({
  userId: z.string().min(1, { message: "User ID is required" }),
  title: z.string().optional(),
  description: z.string().min(1, { message: "Description is required" }),
  categoryId: z.string().min(1, { message: "Category is required" }),
  cityId: z.string().optional(),
  location: z.object({
    type: z.string(),
    coordinates: z.array(z.number()).length(2, {
      message:
        "Coordinates must be an array of two numbers [longitude, latitude]",
    }),
  }),
  reported_at: z.string().optional(),
  verified_at: z.string().optional(),
});

export type CreateTicketFormData = z.infer<typeof createTicketSchema>;

export const updateStateTicketSchema = z.object({
  status: z
    .string()
    .min(1)
    .max(100)
    .refine(
      (val) => {
        return ["OPEN", "IN_PROGRESS", "RESOLVED", "CLOSED"].includes(val);
      },
      {
        message: "Invalid status value",
      }
    ),
});

export type UpdateStateTicketFormData = z.infer<typeof updateStateTicketSchema>;
