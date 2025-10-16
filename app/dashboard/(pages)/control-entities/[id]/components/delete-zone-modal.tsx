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
import useDeleteZone from "../hooks/users/use-delete-zone-control-entity";

type DeleteZoneModalProps = {
  zoneId: string;
};
export default function DeleteZoneModal({ zoneId }: DeleteZoneModalProps) {
  const { isLoading, deleteZone } = useDeleteZone();

  const handleDelete = async () => {
    await deleteZone(zoneId);
    window.location.reload();
  };
  return (
    <Dialog>
      <DialogTrigger asChild title="Eliminar zona">
        <Button variant={"destructive"} className="p-0 cursor-pointer">
          <Trash className="size-4 text-white" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eliminar zona</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <p>
            Esta acción eliminará permanentemente la zona y todos sus datos
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
