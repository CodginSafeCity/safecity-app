import { z } from "zod";

export type areaCoordinate = {
  type: string;
  coordinates: [[number, number][]];
};

// Schemea for create zone
export const CreateZoneSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  controlEntityId: z.string().min(1, { message: "Control Entity is required" }),
  cityId: z.string().optional(),
  area: z
    .object({
      type: z.literal("Polygon"),
      coordinates: z
        .array(z.array(z.tuple([z.number(), z.number()])))
        .min(1, { message: "At least one coordinate is required" }),
    })
    .optional(),
});

export type CreateZoneFormData = z.infer<typeof CreateZoneSchema>;
