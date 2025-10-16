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
import { IUser } from "../../types/user";
import { useState } from "react";

interface UserActionsProps {
  user: IUser;
}
export const UserActions = ({ user }: UserActionsProps) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  return (
    <div className="flex gap-2">
      <EditUserModal user={user} />
      <EditPasswordUserModal userId={user.id} />
      <DeleteUserModal userId={user.id} />
    </div>
    // The dropdown menu is commented out for now, you can enable it if needed
    // <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant={"ghost"} className="p-0 cursor-pointer">
    //       <EllipsisVertical className="size-4" />
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end" className="w-48">
    //     <DropdownMenuItem
    //       onSelect={() => {
    //         setOpenDropdown(false);
    //         setTimeout(() => setOpenDialog(true), 0);
    //       }}
    //     >
    //       <EditUserModal user={user} />
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
    //       <EditPasswordUserModal />
    //     </DropdownMenuItem>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
    //       <DeleteUserModal />
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
};
