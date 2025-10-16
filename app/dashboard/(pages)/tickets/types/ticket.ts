import { ICity } from "@/types/city";
import { ICategory } from "../../categories/types/category";
import { IUser } from "../../users/types/user";

export interface IIncident {
  id: string;
  userId: string;
  title: string;
  description: string;
  categoryId: string;
  status: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";
  cityId?: string;
  location: TicketLocationInterface;
  reported_at: Date;
  verified_at?: Date | null;
  created_at: Date;
  updated_at?: Date;
  category?: ICategory;
  city?: ICity;
  user?: IUser;
}

export interface TicketLocationInterface {
  type: string;
  coordinates: [number, number]; // [latitude, longitude]
}
