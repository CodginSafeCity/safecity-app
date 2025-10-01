import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: object | null;
  setToken: (token: string) => void;
  login: (token: string, user: object) => void;
  clearAuthState: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  user: null,
  setToken: (token) => {
    if (typeof window !== "undefined") {
      if (token) {
        localStorage.setItem("token", token);
      } else {
        localStorage.removeItem("token");
      }
    }
    set({ token, isAuthenticated: !!token });
  },
  login: (token, user) => set({ isAuthenticated: true, token, user }),
  clearAuthState: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    set({ isAuthenticated: false, token: null });
  },
}));
