import { useAuthStore } from "@/store/auth-store";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

// Add a request interceptor
apiInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = useAuthStore.getState().token;

    const isAuthRoute =
      config.url?.includes("/auth") ||
      config.url?.includes("/login") ||
      config.url?.includes("/register");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
// apiInstance.interceptors.response.use(
//   (response: AxiosResponse): AxiosResponse => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       // Optionally handle unauthorized errors, e.g., logout user or refresh token
//       useAuthStore.getState().clearAuthState();

//       if (typeof window !== "undefined") {
//         window.location.href = "/login";
//       }
//     }
//     // Handle response error
//     return Promise.reject(error);
//   }
// );

export { apiInstance };
