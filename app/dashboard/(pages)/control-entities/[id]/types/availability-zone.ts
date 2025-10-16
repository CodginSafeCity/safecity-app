export interface IAvailabilityZone {
  id: string;
  name: string;
  control_center_id: number;
  city_id: number;
  // area is array of coordinates representing the zone's geographic boundaries
  area: {};
  createdAt: Date;
  updatedAt: Date;
}
