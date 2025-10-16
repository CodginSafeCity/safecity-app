"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./components/(list-zone-table)/columns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserPlus } from "lucide-react";
import useListZone from "./hooks/users/use-list-zone-control-entity";
import { useEffect, useState } from "react";
import { IAvailabilityZone } from "./types/availability-zone";

type ListZonePageProps = {
  controlEntityId: string;
};

export default function ListZonePage({ controlEntityId }: ListZonePageProps) {
  const [data, setData] = useState<IAvailabilityZone[]>([]);

  const { getZones, isLoading } = useListZone();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getZones(controlEntityId);
      setData(data);
    };

    fetchData();
  }, [controlEntityId]);

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold">
                Gestión de zonas de disponibilidad
              </CardTitle>
              <CardDescription className="text-sm text-gray-600">
                Esta es la página de gestión de zonas de disponibilidad.
              </CardDescription>
            </div>
            <div>
              <Button variant={"default"} className="cursor-pointer" asChild>
                <Link href={`${controlEntityId}/zone-create`}>
                  <UserPlus className="size-4" />
                  Crear zona
                </Link>
              </Button>
              {/* <AddAvailabilityZoneModal controlEntityId={controlEntityId} /> */}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  );
}
