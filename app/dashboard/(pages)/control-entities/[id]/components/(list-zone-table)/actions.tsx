import { Button } from "@/components/ui/button";
import { EllipsisVertical, Eye, Pen, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IAvailabilityZone } from "../../types/availability-zone";
import DeleteZoneModal from "../delete-zone-modal";

interface ZoneActionsProps {
  zone: IAvailabilityZone;
}

export default function ZoneActions({ zone }: ZoneActionsProps) {
  return (
    <div className="flex space-x-2">
      <Button variant={"ghost"} className="p-0 cursor-pointer">
        <Eye className="size-4" />
      </Button>
      <DeleteZoneModal zoneId={zone.id} />
      {/* <Button variant={"destructive"} className="p-0 cursor-pointer">
        <Trash className="size-4" />
      </Button> */}
    </div>
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button variant={"ghost"} className="p-0 cursor-pointer">
    //       <EllipsisVertical className="size-4" />
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end" className="w-48">
    //     <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
    //       {/* <ViewTicketModal ticket={ticket} /> */}
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
    //       {/* <VerifyTicketModal ticket={ticket} /> */}
    //     </DropdownMenuItem>
    //     <DropdownMenuSeparator />
    //     <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
    //       {/* <TicketDeleteModal ticket={ticket} /> */}
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
}
