import { Button } from "@/components/ui/button";
import { Pen, Trash } from "lucide-react";

export const UserActions = () => {
  return (
    <div>
      <Button
        variant="ghost"
        size="sm"
        className="text-blue-600 cursor-pointer"
      >
        <Pen className="size-4" />
      </Button>
      <Button variant="ghost" size="sm" className="text-red-600 cursor-pointer">
        <Trash className="size-4" />
      </Button>
    </div>
  );
};
