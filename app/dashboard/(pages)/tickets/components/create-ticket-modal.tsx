import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye, Plus } from "lucide-react";
import { useState } from "react";
import FormCreateTicket from "./form-create-ticket";

export default function CreateTicketModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={"default"} className="cursor-pointer">
          <Plus className="size-4" />
          <span>Crear incidente</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear nuevo incidente</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <FormCreateTicket
            onCancel={() => setIsOpen(false)}
            onCreate={() => setIsOpen(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
