import { ColumnDef } from "@tanstack/react-table";
import { IUser } from "../../types/user";
import { UserActions } from "./actions";

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    header: "Role",
    cell: ({ row }) => {
      const user: IUser = row.original;
      const roleName = user.role?.name || "No Role";
      return <span>{roleName}</span>;
    },
  },
  {
    header: "Actions",
    accessorKey: "actions",
    cell: ({ row }) => {
      const user: IUser = row.original;
      return <UserActions user={user} />;
    },
  },
];
