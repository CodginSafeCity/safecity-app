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
import { BadgeCheck } from "lucide-react";
import { useState } from "react";
import { IIncident } from "../types/ticket";
import useUpdateStatusTicket from "../hooks/use-update-ticket";

interface VerifyTicketModalProps {
  // You can add props here if needed, e.g., ticket details
  ticket: IIncident;
}
export default function VerifyTicketModal({ ticket }: VerifyTicketModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { formUpdate, updateStateTicket, isLoading } = useUpdateStatusTicket();

  const handleVerify = async () => {
    try {
      await updateStateTicket(ticket.id, { status: "IN_PROGRESS" });
      window.location.reload();
    } catch (error) {
      console.error("Error updating ticket status:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="flex px-1 py-1 items-center hover:bg-gray-100 rounded-md cursor-pointer w-full">
          <BadgeCheck className="size-4 mr-2" />
          <span>Verificar incidente</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Verificar incidente</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <p>Esta acción marcará el incidente como verificado y confirmado.</p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Cancelar
            </Button>
          </DialogClose>
          <Button
            variant={"default"}
            className="cursor-pointer"
            disabled={isLoading}
            onClick={handleVerify}
          >
            {isLoading ? "Verificando..." : "Verificar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
