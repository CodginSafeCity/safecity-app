export interface IRole {
  id: number;
  name: string;
  description: string;
}
export interface ICity {
  id: number;
  name: string;
}
export interface IUser {
  id: string;
  name: string;
  last_name: string;
  email: string;
  role?: IRole;
  city?: ICity;
}
