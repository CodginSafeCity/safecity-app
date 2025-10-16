"use client";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import FormCreateZone from "../../form-create-zone";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useParams } from "next/navigation";

type AddAvailabilityZoneModalProps = {
  controlEntityId: string;
};
export default function AddAvailabilityZoneModal() {
  const params = useParams();
  const controlEntityId = typeof params.id === "string" ? params.id : "";

  console.log("Params: ", controlEntityId);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Añadir zona de disponibilidad</CardTitle>
        <CardDescription>
          Define una nueva zona de disponibilidad en el mapa.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormCreateZone controlEntityId={controlEntityId} />
      </CardContent>
    </Card>
  );
}
