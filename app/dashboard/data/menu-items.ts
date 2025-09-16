import { LayoutDashboard, TriangleAlert, User } from "lucide-react";

export default [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [],
    },
    {
      title: "Usuarios",
      url: "/dashboard/users",
      icon: User,
      isActive: false,
      items: [],
    },
    {
      title: "Incidentes",
      url: "/dashboard/tickets",
      icon: TriangleAlert,
      isActive: false,
      items: [],
    },
];