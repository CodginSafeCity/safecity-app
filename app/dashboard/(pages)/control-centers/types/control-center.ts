export interface ControlCenterType {
  name: string;
  address: string;
  phone: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ControlCenterWithId extends ControlCenterType {
  id: string;
}
