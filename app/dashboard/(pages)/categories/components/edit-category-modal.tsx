import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pen } from "lucide-react";
import { useState } from "react";
import FormEditCategory from "./(forms)/form-edit-category";
import { Button } from "@/components/ui/button";
import { ICategory } from "../types/category";

type EditCategoryModalProps = {
  category: ICategory;
};

export default function EditCategoryModal({
  category,
}: EditCategoryModalProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"} size="icon" className="cursor-pointer">
          <Pen className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Categoria</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <FormEditCategory
            category={category}
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
}
