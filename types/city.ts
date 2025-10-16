export interface ICity {
  id: string;
  name: string;
  provinceId: string;
  location?: {
    type: string;
    coordinates: [number, number]; // [latitude, longitude]
  };
  created_at: Date;
  updated_at?: Date;
}
