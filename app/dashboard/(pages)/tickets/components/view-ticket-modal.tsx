import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { JSX, useState } from "react";
import { IIncident } from "../types/ticket";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ViewTicketModalProps {
  // You can add props here if needed, e.g., ticket details
  ticket: IIncident;
}
export default function ViewTicketModal({ ticket }: ViewTicketModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="flex px-1 py-1 items-center hover:bg-gray-100 rounded-md cursor-pointer w-full">
          <Eye className="size-4 mr-2" />
          <span>Ver incidente</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Ver incidente</DialogTitle>
          <DialogDescription>
            Información completa del reporte seleccionado
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="font-semibold">Titulo</h3>
            <p className="text-muted-foreground">{ticket.title}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 my-4">
            <div className="flex-1">
              <h3 className="font-semibold">Categoria</h3>
              <p className="text-muted-foreground">{ticket.category?.name}</p>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Estado</h3>
              {handleState(ticket.status)}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Descripción</h3>
            <p className="text-muted-foreground">{ticket.description}</p>
          </div>
          <div>
            <h3 className="font-semibold">Locación</h3>
            <p className="text-muted-foreground">
              {/* {ticket.location.coordinates.join(", ")} */}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 my-4">
            <div className="flex-1">
              <h3 className="font-semibold">Reportado por</h3>
              <p className="text-muted-foreground">
                {ticket.user?.name} {ticket.user?.last_name}
              </p>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Fecha del reporte</h3>
              <p className="text-muted-foreground">
                {new Date(ticket.reported_at).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 my-4">
            <div className="flex-1">
              <h3 className="font-semibold">Fecha de verificación</h3>
              <p className="text-muted-foreground">
                {ticket.verified_at
                  ? new Date(ticket.verified_at).toLocaleString()
                  : "No verificado"}
              </p>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Ultima actualización</h3>
              <p className="text-muted-foreground">
                {ticket.updated_at
                  ? new Date(ticket.updated_at).toLocaleString()
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"} className="cursor-pointer">
              Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
