import { DataTable } from "@/components/ui/data-table";
import useListUser from "../../hooks/useListUser";
import { useEffect, useState } from "react";
import { IUser } from "../../types/user";
import { columns } from "./columns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const UserListTable = () => {
  const [data, setData] = useState<IUser[]>([]);
  const { getUsers } = useListUser();

  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers();

      console.log(users);
      setData(users);
    };
    fetchData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de Usuarios</CardTitle>
        <CardDescription>
          Esta es la lista de todos los usuarios registrados.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
};
export default UserListTable;
