export interface TicketType {
  userId: string;
  title: string;
  description: string;
  categoryId: string;
  status: "open" | "in_progress" | "resolved" | "closed";
  cityId?: string;
  location: TicketLocationInterface;
  reportedAt: Date;
  verifiedAt?: Date | null;
  createdAt: Date;
  updatedAt?: Date;
}

export interface TicketWithId extends TicketType {
  id: string;
}

export interface TicketLocationInterface {
  type: string;
  coordinates: [number, number]; // [latitude, longitude]
}
