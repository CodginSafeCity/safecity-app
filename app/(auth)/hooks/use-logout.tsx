import { useAuthStore } from "@/store/auth-store";
import { logoutService } from "../services/auth-service";
import { useState } from "react";

const useLogout = () => {
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);

  const logout = async () => {
    setIsLoggingOut(true);

    try {
      await logoutService();
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return { isLoggingOut, logout };
};

export default useLogout;
