import { httpRequest } from "@/lib/http-request";
import {
  FormLoginData,
  FormRegisterData,
  ResetPasswordData,
} from "../types/auth";

export const loginService = async (credentials: FormLoginData) => {
  return httpRequest({
    // url: "/auth/login",
    url: "/login",
    method: "POST",
    data: credentials,
  });
};

export const sendResetLinkService = async (data: { email: string }) => {
  return httpRequest({
    url: "/forgot-password",
    method: "POST",
    data,
  });
};

export const resetPasswordService = async (data: ResetPasswordData) => {
  return httpRequest({
    url: "/reset-password",
    method: "POST",
    data,
  });
};

export const registerService = async (data: FormRegisterData) => {
  return httpRequest({
    url: "/register",
    method: "POST",
    data,
  });
};

export const getUserAuthService = async () => {
  return httpRequest({
    url: "/auth/profile",
    method: "GET",
  });
};

export const logoutService = async () => {
  return httpRequest({
    url: "/auth/logout",
    method: "POST",
  });
};
