import { Button } from "@/components/ui/button";
import { EllipsisVertical, Pen, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EditCategoryModal from "../edit-category-modal";
import DeleteCategoryModal from "../delete-category-modal";
import { ICategory } from "../../types/category";

type CategoryActionsProps = {
  category: ICategory;
};
export const CategoryActions = ({ category }: CategoryActionsProps) => {
  return (
    <div className="flex gap-2">
      <EditCategoryModal category={category} />
      <DeleteCategoryModal categoryId={category.id} />
    </div>
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant={"ghost"} className="p-0 cursor-pointer">
    //       <EllipsisVertical className="size-4" />
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end" className="w-48">
    //     <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
    //       <EditCategoryModal />
    //     </DropdownMenuItem>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
    //       <DeleteCategoryModal />
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
};
