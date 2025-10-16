import { useAuthStore } from "@/store/auth-store";
import { AuthProfileType } from "../types/auth";
import { getUserAuthService } from "../services/auth-service";
import useSWR from "swr";

export default function useUserAuth() {
  const { token, clearAuthState } = useAuthStore();

  const fetcher = async (): Promise<AuthProfileType> => {
    try {
      const response = await getUserAuthService();
      console.log("User profile fetched:", response);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const {
    data: userAuth,
    error,
    isLoading,
    mutate,
  } = useSWR<AuthProfileType>("user-profile", fetcher, {
    refreshInterval: 30000,
    onError: (err) => {
      clearAuthState();
      console.error("Error fetching user profile:", err);
    },
  });

  const isAuthenticated = !!token;

  return { token, isAuthenticated, fetcher, isLoading, userAuth, mutate };
}
