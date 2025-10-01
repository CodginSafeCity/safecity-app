import { z } from "zod";

// Schema for ticket creation form
export const createTicketSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  categoryId: z.string().min(1, { message: "Category is required" }),
  cityId: z.string().min(1, { message: "City is required" }),
  location: z.object({
    type: z.literal("Point"),
    coordinates: z.array(z.number()).length(2, {
      message:
        "Coordinates must be an array of two numbers [longitude, latitude]",
    }),
  }),
});
