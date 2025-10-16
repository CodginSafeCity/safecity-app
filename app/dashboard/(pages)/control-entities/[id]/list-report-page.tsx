"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { useEffect, useState } from "react";
import { IIncident } from "../../tickets/types/ticket";
import { columns } from "../../tickets/components/(table-list)/columns";
import useListIncident from "./hooks/users/use-list-incident-control-entity";

type ListUserPageProps = {
  controlEntityId: string;
};

export default function ListReportPage({ controlEntityId }: ListUserPageProps) {
  const [tickets, setTickets] = useState<IIncident[]>([]);

  const { getIncidents, isLoading } = useListIncident();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getIncidents(controlEntityId);
      setTickets(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Gestión de incidentes
          </CardTitle>
          <CardDescription className="text-sm text-gray-600">
            Esta es la página de gestión de incidentes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={tickets} />
        </CardContent>
      </Card>
    </div>
  );
}
