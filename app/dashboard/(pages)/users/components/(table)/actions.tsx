import { Button } from "@/components/ui/button";
import { EllipsisVertical, Pen, Trash } from "lucide-react";
import DeleteUserModal from "../delete-user-modal";
import EditUserModal from "../edit-user-modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import EditPasswordUserModal from "../edit-password-user-modal";

export const UserActions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="p-0 cursor-pointer">
          <EllipsisVertical className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <EditUserModal />
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <EditPasswordUserModal />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <DeleteUserModal />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
