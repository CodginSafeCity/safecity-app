import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Fingerprint, Pen } from "lucide-react";
import FormUpdatePasswordUser from "./form-update-password-user";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type EditPasswordUserModalProps = {
  userId: string;
};

const EditPasswordUserModal = ({ userId }: EditPasswordUserModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild title="Actualizar contraseña">
        <Button variant={"outline"} className="p-0 cursor-pointer">
          <Fingerprint className="size-4" />
          {/* <span>Actualizar contraseña</span> */}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Actualizar contraseña</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <FormUpdatePasswordUser
            userId={userId}
            onCancel={(result) => setIsOpen(!result)}
            onUpdate={({ result }) => {}}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditPasswordUserModal;
