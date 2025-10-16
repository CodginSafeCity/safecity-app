import { Button } from "@/components/ui/button";
import { LogOut, MapPin, Plus, Shield } from "lucide-react";
import { IUser } from "../(pages)/users/types/user";
import useLogout from "@/app/(auth)/hooks/use-logout";
import { useAuthStore } from "@/store/auth-store";
import ListUserIncident from "./list-user-incident";
import CreateTicketModal from "../(pages)/tickets/components/create-ticket-modal";

type Props = {
  user: IUser;
  mutate: () => void;
};
export default function UserDashboard({ user, mutate }: Props) {
  const { logout } = useLogout();
  const { clearAuthState } = useAuthStore();

  const onLogout = async () => {
    try {
      await logout();
      clearAuthState();
      mutate();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-gradient-card shadow-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-emergency">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">SeguriReport</h1>
                <p className="text-sm text-muted-foreground">
                  Dashboard de incidentes
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="font-medium">
                  {user.name} {user.last_name}
                </p>
                <div className="flex items-center gap-2">
                  {/* <Badge variant="outline" className="text-xs">
                    {user.role?.name}
                  </Badge> */}
                  {/* <span className="text-xs text-muted-foreground">{user.department}</span> */}
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={onLogout}
                className="cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <div className="flex gap-2">
            <CreateTicketModal />
          </div>
        </div>

        <ListUserIncident userId={user.id} />
      </main>
    </div>
  );
}
