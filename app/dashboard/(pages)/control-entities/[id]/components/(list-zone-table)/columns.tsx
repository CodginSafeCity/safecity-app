import { ColumnDef } from "@tanstack/react-table";
import { IAvailabilityZone } from "../../types/availability-zone";
import ZoneActions from "./actions";

export const columns: ColumnDef<IAvailabilityZone>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    header: "Creado en",
    cell: ({ row }) => {
      const createdAt = row.original.createdAt;
      return createdAt ? new Date(createdAt).toLocaleString() : "N/A";
    },
  },
  {
    header: "Acciones",
    cell: ({ row }) => {
      const zone = row.original;
      return <ZoneActions zone={zone} />;
    },
  },
];
