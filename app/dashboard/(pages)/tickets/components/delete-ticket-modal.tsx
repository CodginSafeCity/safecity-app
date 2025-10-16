import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dialog } from "@radix-ui/react-dialog";
import { Trash } from "lucide-react";
import { IIncident } from "../types/ticket";

interface TicketDeleteModalProps {
  // You can add props here if needed, e.g., ticket details
  ticket: IIncident;
}
export default function TicketDeleteModal({ ticket }: TicketDeleteModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex px-1 py-1 items-center hover:bg-red-50 rounded-md cursor-pointer w-full text-red-400">
          <Trash className="size-4 mr-2 text-red-400" />
          <span>Eliminar</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eliminar incidente</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <p>
            Esta acción eliminará permanentemente al incidente y todos sus datos
            asociados.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Cancelar
            </Button>
          </DialogClose>
          <Button variant="destructive" className="cursor-pointer">
            Eliminar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
