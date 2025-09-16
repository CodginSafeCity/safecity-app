import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pen } from "lucide-react";
import FormUpdateUser from "./form-update-user";
import { useState } from "react";

const EditUserModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="flex px-1 py-1 items-center hover:bg-gray-100 rounded-md cursor-pointer w-full">
          <Pen className="size-4 mr-2" />
          <span>Editar</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Usuario</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <FormUpdateUser
            onCancel={(result) => {
              setIsOpen(false);
            }}
            onUpdate={(result) => {
              console.log("Update:", result);
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserModal;
