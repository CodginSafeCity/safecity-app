"use client";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import useUserAuth from "../(auth)/hooks/use-user-auth";
import { LoadingComponent } from "@/components/loading";
import { redirect } from "next/navigation";
import useShowUser from "./services/use-show-user";
import { useEffect, useState } from "react";
import { IUser } from "./(pages)/users/types/user";
import UserDashboard from "./components/user-dashboard";

export default function asyncDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<IUser>({} as IUser);

  const { isAuthenticated, isLoading, userAuth, mutate } = useUserAuth();
  const { getUser, isLoading: isLoadingUser } = useShowUser();

  useEffect(() => {
    if (userAuth) {
      const fetchUser = async () => {
        const fetchedUser = await getUser(userAuth.id);
        setUser(fetchedUser);
      };
      fetchUser();
    }
  }, [userAuth]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (!isLoading && !isAuthenticated) {
    redirect("/");
  }

  if (user && user.role?.name === "Admin") {
    return (
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <main className="flex-1 overflow-y-auto p-4">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    );
  }

  if (user && user.role?.name === "User") {
    return <UserDashboard user={user} mutate={mutate} />;
  }
}
