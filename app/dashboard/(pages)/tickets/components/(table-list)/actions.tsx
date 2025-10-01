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
import ViewTicketModal from "../view-ticket-modal";
import TicketDeleteModal from "../delete-ticket-modal";
import VerifyTicketModal from "../verify-ticket-modal";
import { TicketWithId } from "../../types/ticket";

interface TicketActionsProps {
  ticket: TicketWithId;
}

export default function TicketActions({ ticket }: TicketActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="p-0 cursor-pointer">
          <EllipsisVertical className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <ViewTicketModal ticket={ticket} />
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <VerifyTicketModal ticket={ticket} />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <TicketDeleteModal ticket={ticket} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
