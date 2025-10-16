import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import FormCreateControlEntity from "./form-create-control-entity";

export default function CreateControlEntityModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={"default"} className="cursor-pointer">
          <Plus className="size-4" />
          <span>Nueva entidad de control</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear nueva Categoria</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <FormCreateControlEntity
            onCancel={(result) => {
              setIsOpen(false);
            }}
            onCreate={(result) => {
              console.log("Create:", result);
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
