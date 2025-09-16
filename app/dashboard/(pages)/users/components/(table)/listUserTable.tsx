import { DataTable } from "@/components/ui/data-table";
import useListUser from "../../hooks/useListUser";
import { useEffect, useState } from "react";
import { userListType } from "../../types/user";
import { columns } from "./columns";

const UserListTable = () => {
  const [data, setData] = useState<userListType[]>([]);
  const { getUsers } = useListUser();

  useEffect(() => {
    const fetchData = async () => {
      const users = await getUsers();
      setData(users);
    };
    fetchData();
  }, []);

  return <DataTable columns={columns} data={data} />;
};
export default UserListTable;
