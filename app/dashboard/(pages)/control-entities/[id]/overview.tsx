import { JSX, use, useEffect, useState } from "react";
import useListOverview from "./hooks/users/use-list-overview-control-entity ";
import { IOvreView } from "./types/overview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ListZonePageProps = {
  controlEntityId: string;
};

export default function DashboardOverviewPage({
  controlEntityId,
}: ListZonePageProps) {
  const [overviewData, setOverviewData] = useState<IOvreView[]>([]);

  const { getOverview, isLoading } = useListOverview();

  const handleState = (status: string): JSX.Element => {
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
      case "CLOSED":
        textColor = "text-red-700";
        bgColor = "bg-red-100";
        estatusText = "Cerrado";
        break;
    }

    return <Badge className={cn(textColor, bgColor)}>{estatusText}</Badge>;
  };

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const data = await getOverview(controlEntityId);
        setOverviewData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOverview();
  }, [controlEntityId]);

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-lg font-bold">Resumen</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {overviewData.map((item: IOvreView) => (
          <Card className="shadow-card" key={item.status}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Incidentes {handleState(item.status)}
              </CardTitle>
              {/* <AlertTriangle className="w-4 h-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.total}</div>
              <p className="text-xs text-muted-foreground">Total reportados</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
