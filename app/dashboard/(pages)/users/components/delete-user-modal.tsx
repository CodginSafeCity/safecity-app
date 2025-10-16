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
import { useDeleteUser } from "../hooks/useDeleteUser";

type DeleteUserModalProps = {
  userId: string;
};
export default function DeleteUserModal({ userId }: DeleteUserModalProps) {
  const { isLoading, deleteUser } = useDeleteUser();

  const handleDelete = async () => {
    await deleteUser(userId);
    window.location.reload();
  };
  return (
    <Dialog>
      <DialogTrigger asChild title="Eliminar usuario">
        <Button variant={"destructive"} className="p-0 cursor-pointer">
          <Trash className="size-4 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eliminar Usuario</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <p>
            Esta acción eliminará permanentemente al usuario y todos sus datos
            asociados.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Cancelar
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            className="cursor-pointer"
            disabled={isLoading}
            onClick={handleDelete}
          >
            {isLoading ? "Eliminando..." : "Eliminar"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
