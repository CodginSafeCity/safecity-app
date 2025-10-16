import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserPlus } from "lucide-react";
import FormCreateUser from "./form-create-user";
import { useState } from "react";

type CreateUserControlEntityModalProps = {
  controlEntityId: string;
};
const CreateUserControlEntityModal = ({
  controlEntityId,
}: CreateUserControlEntityModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={"default"} className="cursor-pointer">
          <UserPlus className="size-4" />
          <span>Crear Usuario</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear nuevo Usuario</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <FormCreateUser
            controlEntityId={controlEntityId}
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
};

export default CreateUserControlEntityModal;
