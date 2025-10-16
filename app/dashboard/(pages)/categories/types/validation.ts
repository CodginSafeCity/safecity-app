import { z } from "zod";

// Schema for category creation form
export const createCategorySchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
});

export type CreateCategoryType = z.infer<typeof createCategorySchema>;
