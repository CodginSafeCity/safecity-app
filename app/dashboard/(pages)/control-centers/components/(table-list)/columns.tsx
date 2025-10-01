import { ColumnDef } from "@tanstack/react-table";
import { ControlCenterWithId } from "../../types/control-center";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye } from "lucide-react";

export const columns: ColumnDef<ControlCenterWithId>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "address",
    header: "Dirección",
  },
  {
    accessorKey: "phone",
    header: "Teléfono",
  },
  {
    accessorKey: "createdAt",
    header: "Fecha de creación",
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt") as Date;
      return createdAt.toLocaleDateString();
    },
  },
  {
    header: "Acciones",
    cell: ({ row }) => {
      const id = row.getValue("id");
      return (
        <div>
          <Button asChild variant={"default"}>
            <Link href={`./control-centers/${id}`}>
              <Eye />
            </Link>
          </Button>
        </div>
      );
    },
  },
];
