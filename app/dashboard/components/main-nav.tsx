import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { MenuItem } from "../types/menu-item";
import { useParams, usePathname, useRouter } from "next/navigation";

type NavMainProps = {
  items?: MenuItem[];
};

export function NavMain({ items }: NavMainProps) {
  const pathName = usePathname();

  console.log("Current path:", pathName);
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items?.map((item: MenuItem, index) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              tooltip={item.title}
              size={"lg"}
              isActive={item.url === pathName}
            >
              {item.icon && <item.icon className="size-4" />}
              <a href={item.url}>{item.title}</a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
