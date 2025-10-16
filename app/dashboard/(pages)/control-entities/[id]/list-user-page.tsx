"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { useEffect, useState } from "react";
import { IUser } from "../../users/types/user";
import { columns } from "../../users/components/(table)/columns";
import useListUser from "./hooks/users/use-list-user-control-entity";
import CreateUserControlEntityModal from "./components/create-user-modal";

type ListUserPageProps = {
  controlEntityId: string;
};
export default function ListUserPage({ controlEntityId }: ListUserPageProps) {
  const [users, setUsers] = useState<IUser[]>([]);

  const { getUsers, isLoading } = useListUser();

  // console.log("Params ID:", controlEntityId);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers(controlEntityId);
      setUsers(data);
    };
    fetchData();
  }, [controlEntityId]);

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold">
                Gestión de usuarios
              </CardTitle>
              <CardDescription className="text-sm text-gray-600">
                Esta es la página de gestión de usuarios.
              </CardDescription>
            </div>
            <div>
              <CreateUserControlEntityModal controlEntityId={controlEntityId} />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={users} />
        </CardContent>
      </Card>
    </div>
  );
}
