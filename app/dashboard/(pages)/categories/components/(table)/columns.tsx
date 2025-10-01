import { ColumnDef } from "@tanstack/react-table";
import { CategoryWithId } from "../../types/category";
import { CategoryActions } from "./actions";

export const columns: ColumnDef<CategoryWithId>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Categoria",
  },
  {
    accessorKey: "description",
    header: "Descripción",
  },
  {
    header: "Actions",
    accessorKey: "actions",
    cell: ({ row }) => {
      const category = row.original;
      return <CategoryActions />;
    },
  },
];
