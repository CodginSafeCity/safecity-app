import { ColumnDef } from "@tanstack/react-table";
import { IIncident } from "../../types/ticket";
import TicketActions from "./actions";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const columns: ColumnDef<IIncident>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    header: "Reporte",
    cell: ({ row }) => {
      const ticket = row.original;
      return (
        <div>
          <p className="font-medium">{ticket.title}</p>
          <p className="text-sm text-gray-500">{ticket.description}</p>
        </div>
      );
    },
  },
  {
    // accessorKey: "categoryId",
    header: "Categoria",
    cell: ({ row }) => {
      const category = row.original.category;
      return <span>{category ? category.name : "Sin categoría"}</span>;
    },
  },
  {
    header: "Estado",
    cell: ({ row }) => {
      const status = row.original.status;
      let textColor = "";
      let bgColor = "";
      let estatusText = "";

      switch (status) {
        case "OPEN":
          textColor = "text-blue-700";
          bgColor = "bg-blue-100";
          estatusText = "Abierto";
          break;
        case "IN_PROGRESS":
          textColor = "text-yellow-700";
          bgColor = "bg-yellow-100";
          estatusText = "En Progreso";
          break;
        // case "resolved":
        //   textColor = "text-green-700";
        //   bgColor = "bg-green-100";
        //   estatusText = "Resuelto";
        //   break;
        case "CLOSED":
          textColor = "text-red-700";
          bgColor = "bg-red-100";
          estatusText = "Cerrado";
          break;
      }
      return <Badge className={cn(textColor, bgColor)}>{estatusText}</Badge>;
    },
  },
  {
    accessorKey: "reportedAt",
    header: "Fecha del reporte",
    cell: ({ row }) => {
      const date = new Date(row.original.reported_at);
      return <span>{date.toLocaleString()}</span>;
    },
  },
  {
    header: "Actions",
    accessorKey: "actions",
    cell: ({ row }) => {
      const ticket = row.original;
      return <TicketActions ticket={ticket} />;
    },
  },
];
