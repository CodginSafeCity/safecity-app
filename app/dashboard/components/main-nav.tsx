import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { MenuItem } from "../types/menu-item";
import { useParams, usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavMainProps = {
  items?: MenuItem[];
};

export function NavMain({ items }: NavMainProps) {
  const pathName = usePathname();

  console.log("Current path:", pathName);
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items?.map((item: MenuItem, index) => {
          const isActive = pathName === item.url;

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                size={"lg"}
                asChild
                className={cn(
                  isActive
                    ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                    : ""
                )}
              >
                <Link href={item.url}>
                  {item.icon && <item.icon className="size-4" />}
                  {item.title}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
