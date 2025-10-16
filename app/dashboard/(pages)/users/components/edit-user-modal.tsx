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
import { IUser } from "../types/user";
import { Button } from "@/components/ui/button";

interface EditUserModalProps {
  user: IUser;
}
const EditUserModal = ({ user }: EditUserModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild title="Editar usuario">
        <Button variant={"outline"} className="p-0 cursor-pointer">
          <Pen className="size-4" />
          {/* <span>Editar</span> */}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Usuario</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <FormUpdateUser
            user={user}
            onCancel={(result) => {
              setIsOpen(false);
            }}
            onUpdate={(result) => {
              if (result) {
                setIsOpen(false);
              }
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserModal;
