import { ColumnDef } from "@tanstack/react-table";
import { TicketWithId } from "../../types/ticket";
import TicketActions from "./actions";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const columns: ColumnDef<TicketWithId>[] = [
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
    accessorKey: "categoryId",
    header: "Categoria",
  },
  {
    header: "Estado",
    cell: ({ row }) => {
      const status = row.original.status;
      let textColor = "";
      let bgColor = "";
      let estatusText = "";

      switch (status) {
        case "open":
          textColor = "text-blue-700";
          bgColor = "bg-blue-100";
          estatusText = "Abierto";
          break;
        case "in_progress":
          textColor = "text-yellow-700";
          bgColor = "bg-yellow-100";
          estatusText = "En Progreso";
          break;
        case "resolved":
          textColor = "text-green-700";
          bgColor = "bg-green-100";
          estatusText = "Resuelto";
          break;
        case "closed":
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
      const date = new Date(row.original.reportedAt);
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
