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

const EditPasswordUserModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="flex px-1 py-1 items-center hover:bg-gray-100 rounded-md cursor-pointer w-full">
          <Fingerprint className="size-4 mr-2" />
          <span>Actualizar contraseña</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Actualizar contraseña</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <FormUpdatePasswordUser
            onCancel={(result) => setIsOpen(!result)}
            onUpdate={({ result }) => {}}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditPasswordUserModal;
