import { set } from "zod";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  token: string | null;
  setToken: (token: string) => void;
  clearAuthState: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token: string) => set({ token }),
      clearAuthState: () => set({ token: null }),
    }),
    {
      name: "auth-storage",
      storage:
        typeof window !== "undefined"
          ? createJSONStorage(() => localStorage)
          : createJSONStorage(() => ({
              getItem: (name: string) => null,
              setItem: (name: string, value: string) => {},
              removeItem: (name: string) => {},
            })),
    }
  )
);
