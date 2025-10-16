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
import { IIncident } from "../../types/ticket";
import CloseTicketModal from "../close-ticket-modal";

interface TicketActionsProps {
  ticket: IIncident;
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
        {ticket.status === "OPEN" && (
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <VerifyTicketModal ticket={ticket} />
          </DropdownMenuItem>
        )}
        {ticket.status === "IN_PROGRESS" && (
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <CloseTicketModal ticket={ticket} />
          </DropdownMenuItem>
        )}
        {ticket.status === "OPEN" && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <TicketDeleteModal ticket={ticket} />
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
