"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ListUserPage from "./list-user-page";
import ListReportPage from "./list-report-page";
import ListZonePage from "./list-zone-page";
import { useParams } from "next/navigation";
import DashboardOverviewPage from "./overview";

export default function Page() {
  const params = useParams();
  const controlEntityId = Array.isArray(params.id)
    ? params.id[0]
    : params.id || "";

  if (!controlEntityId) {
    return <div>No control entity ID provided</div>;
  }
  return (
    <div className="">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="users">Usuarios</TabsTrigger>
          <TabsTrigger value="reports">Reportes</TabsTrigger>
          <TabsTrigger value="zones">Zonas</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <DashboardOverviewPage controlEntityId={controlEntityId} />
        </TabsContent>
        <TabsContent value="users">
          <ListUserPage controlEntityId={controlEntityId} />
        </TabsContent>
        <TabsContent value="reports">
          <ListReportPage controlEntityId={controlEntityId} />
        </TabsContent>
        <TabsContent value="zones">
          <ListZonePage controlEntityId={controlEntityId} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
