"use client";

import { Form } from "@/components/ui/form";
import useLogin from "../hooks/use-login";
import { Button } from "@/components/ui/button";
import FormInputField from "@/components/ui/form-field";
import Link from "next/link";
import { FormLoginData } from "../types/auth";
import { useAuthStore } from "@/store/auth-store";

const LoginForm = () => {
  const { formLogin, login, isLoading } = useLogin();

  const onSubmit = async (values: FormLoginData) => {
    try {
      await login(values);
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
              name="email"
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
