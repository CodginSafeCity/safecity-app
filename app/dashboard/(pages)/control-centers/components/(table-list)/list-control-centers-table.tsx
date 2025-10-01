import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { ControlCenterWithId } from "../../types/control-center";
import { useEffect, useState } from "react";
import useListControlCenters from "../../hooks/use-list-control-center";
import { columns } from "./columns";

export default function ListControlCentersTable() {
  const [data, setData] = useState<ControlCenterWithId[]>([]);
  const { getControlCenters } = useListControlCenters();

  useEffect(() => {
    const fetchData = async () => {
      const controlCenters = await getControlCenters();
      setData(controlCenters);
    };
    fetchData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de Centros de Control</CardTitle>
        <CardDescription>
          Esta es la lista de todos los centros de control registrados.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
}
