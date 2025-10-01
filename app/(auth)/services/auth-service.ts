import { httpRequest } from "@/lib/http-request";
import { FormLoginData, FormRegisterData } from "../types/auth";

export const loginServiceTest = async (credentials: FormLoginData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.username === "test" &&
        credentials.password === "password"
      ) {
        resolve({ accessToken: "mocked_access_token_123456" });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 2000);
  });
};

export const loginService = async (credentials: FormLoginData) => {
  return httpRequest({
    url: "/auth/login",
    method: "POST",
    data: credentials,
  });
};

export const registerService = async (data: FormRegisterData) => {
  return httpRequest({
    url: "/auth/register",
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
