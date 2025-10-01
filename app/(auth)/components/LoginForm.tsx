"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useLogin from "../hooks/useLogin";
import { loginSchema } from "../types/validations";
import z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormInputField from "@/components/ui/form-field";
import Link from "next/link";
import { FormLoginData } from "../types/auth";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/auth-store";
import { useSearchParams } from "next/navigation";

const LoginForm = () => {
  const { formLogin, login, isLoading } = useLogin();
  const { setToken } = useAuthStore();
  const searchParams = useSearchParams();

  const onSubmit = async (values: FormLoginData) => {
    try {
      const data = await login(values);
      setToken(data.accessToken);

      document.cookie = `token=${data.accessToken}; path=/; max-age=86400`; // 1 day

      const redirectTo = searchParams.get("redirectTo") || "/dashboard";
      window.location.href = redirectTo;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...formLogin}>
      <form onSubmit={formLogin.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-3">
            <FormInputField
              control={formLogin.control}
              name="username"
              label="Correo electrónico"
              type="text"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>
          <div className="grid gap-3">
            <FormInputField
              control={formLogin.control}
              name="password"
              label="Contraseña"
              type="password"
              placeholder="**********"
            />
            <Link className=" hover:underline text-xs" href="/forgot-password">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <div className="grid gap-3">
            <Button
              size={"lg"}
              type="submit"
              className="cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? "Iniciado sesión" : "Iniciar sesión"}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
