import {
  Building,
  LayoutDashboard,
  SquareStack,
  TriangleAlert,
  User,
} from "lucide-react";

export const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard/overview",
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
    title: "Categorías",
    url: "/dashboard/categories",
    icon: SquareStack,
    isActive: false,
    items: [],
  },
  {
    title: "Centros de control",
    url: "/dashboard/control-entities",
    icon: Building,
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
