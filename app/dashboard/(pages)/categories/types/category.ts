export interface Category {
  name: string;
  description: string;
}

export interface CategoryWithId extends Category {
  id: number;
}