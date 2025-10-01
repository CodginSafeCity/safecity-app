import { DataTable } from "@/components/ui/data-table";
import { useEffect, useState } from "react";
import { TicketWithId } from "../../types/ticket";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useListTickets from "../../hooks/use-list-tickets";
import { columns } from "./columns";

export default function TicketListTable() {
  const [data, setData] = useState<TicketWithId[]>([]);
  const { getTickets } = useListTickets();

  useEffect(() => {
    const fetchData = async () => {
      const tickets = await getTickets();
      setData(tickets);
    };
    fetchData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de incidentes</CardTitle>
        <CardDescription>
          Esta es la lista de todos los incidentes registrados.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
}
