import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UserPlus } from "lucide-react";

type AddAvailabilityZoneModalProps = {
  controlEntityId: string;
};
export default function AddAvailabilityZoneModal({
  controlEntityId,
}: AddAvailabilityZoneModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"} className="cursor-pointer">
          <UserPlus className="size-4" />
          <span>Crear zona</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[1300px] max-w-[1200px]">
        <DialogHeader>
          <DialogTitle>Crear nueva zosna</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div></div>
      </DialogContent>
    </Dialog>
  );
}
