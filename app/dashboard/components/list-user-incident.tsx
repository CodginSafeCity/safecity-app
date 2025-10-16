import { JSX, useEffect, useState } from "react";
import { IIncident } from "../(pages)/tickets/types/ticket";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Eye, MapPin, User } from "lucide-react";
import useUserListTickets from "../(pages)/tickets/hooks/use-list-user-tickets";
import useListTickets from "../(pages)/tickets/hooks/use-list-tickets";
import { cn } from "@/lib/utils";
import ButtonViewTicketModal from "../(pages)/tickets/components/button-view-ticket-modal";

type Props = {
  userId: string;
};
export default function ListUserIncident({ userId }: Props) {
  const [incidents, setIncidents] = useState<IIncident[]>([]);

  const { getUserTickets, isLoading } = useUserListTickets();
  // const { getTickets, isLoading } = useListTickets();

  console.log("User ID in ListUserIncident:", userId);

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
    const fetchIncidents = async () => {
      try {
        // const data = await getTickets();
        const data = await getUserTickets(userId);
        setIncidents(data);
      } catch (error) {
        console.error("Failed to fetch incidents:", error);
      }
    };

    if (userId) {
      fetchIncidents();
    }
  }, [userId]);

  return (
    <>
      <div className="container mx-auto p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Incidentes Reportados</h2>
          <Badge variant="outline" className="text-lg px-3 py-1">
            {incidents.length} reporte{incidents.length !== 1 ? "s" : ""}
          </Badge>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-3">
        {incidents.map((incident) => (
          <Card
            key={incident.id}
            className="shadow-card bg-gradient-card hover:shadow-emergency transition-all duration-300"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">
                    {/* {getTypeEmoji(incident.type)} */}
                  </span>
                  <div>
                    <CardTitle className="text-lg">
                      {incident.category?.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      {handleState(incident.status)}
                    </div>
                  </div>
                </div>
                <ButtonViewTicketModal ticket={incident} />
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <p className="text-muted-foreground line-clamp-2">
                {incident.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="truncate">{incident.city?.name}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-secondary" />
                  <span>
                    {new Date(incident.reported_at).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-accent" />
                  <span className="truncate">{}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
