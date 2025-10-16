import { DataTable } from "@/components/ui/data-table";
import useListUser from "../../hooks/use-list-categories";
import { useEffect, useState } from "react";
import { ICategory } from "../../types/category";
import { columns } from "./columns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CategoryListTable() {
  const [data, setData] = useState<ICategory[]>([]);
  const { getCategories } = useListUser();

  useEffect(() => {
    const fetchData = async () => {
      const categories = await getCategories();
      setData(categories);
    };
    fetchData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de categorias</CardTitle>
        <CardDescription>
          Esta es la lista de todas las categorias registradas.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
}
