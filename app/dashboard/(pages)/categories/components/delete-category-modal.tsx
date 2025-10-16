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
import useDeleteCategory from "../hooks/use-delete-category";

type DeleteCategoryModalProps = {
  categoryId: string;
};
export default function DeleteCategoryModal({
  categoryId,
}: DeleteCategoryModalProps) {
  const { deleteCategory, isLoading } = useDeleteCategory();

  const handleDelete = async () => {
    await deleteCategory(categoryId);
    window.location.reload();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"} size="icon" className="cursor-pointer">
          <Trash className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Eliminar Categoria</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <p>
            Esta acción eliminará permanentemente la categoría y todos sus datos
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
