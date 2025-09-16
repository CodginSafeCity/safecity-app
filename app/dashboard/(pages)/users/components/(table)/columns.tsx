import { ColumnDef } from "@tanstack/react-table";
import { userListType } from "../../types/user";
import { UserActions } from "./actions";

export const columns: ColumnDef<userListType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role.name",
    header: "Role",
  },
  {
    header: "Actions",
    accessorKey: "actions",
    cell: ({ row }) => {
      const user = row.original;
      return <UserActions />;
    },
  },
];
