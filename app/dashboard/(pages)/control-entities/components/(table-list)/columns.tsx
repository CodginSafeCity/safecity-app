import { ColumnDef } from "@tanstack/react-table";
import { IControlEntity } from "../../types/control-entity";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye } from "lucide-react";

export const columns: ColumnDef<IControlEntity>[] = [
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
    header: "Acciones",
    cell: ({ row }) => {
      const id = row.getValue("id");
      return (
        <div>
          <Button asChild variant={"default"}>
            <Link href={`./control-entities/${id}`}>
              <Eye />
            </Link>
          </Button>
        </div>
      );
    },
  },
];
