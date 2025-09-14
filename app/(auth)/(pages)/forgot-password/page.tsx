"use client";
import { GalleryVerticalEnd } from "lucide-react";
import RegisterForm from "../../components/RegisterForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ForgotPasswordForm from "../../components/ForgotPasswordForm";

const ForgotPasswordPage = () => {
  const onSwitchToLogin = () => {
    // Logic to switch to the login page
  };
  return (
    <div className="grid min-h-svh lg:grid-cols-1">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <div className="my-8 flex flex-col items-center gap-2">
              <a
                href="#"
                className="flex flex-col items-center gap-2 font-medium"
              >
                <div className="flex size-8 items-center justify-center rounded-md">
                  <GalleryVerticalEnd className="size-6" />
                </div>
                <span className="sr-only">Safe City Inc.</span>
              </a>
              <h1 className="text-xl text-center font-bold">
                Restablecer contraseña
              </h1>
              <p className="text-muted-foreground">
                Ingresa tu correo electrónico para restablecer tu contraseña, se
                le enviará un enlace de restablecimiento.
              </p>
            </div>
            <ForgotPasswordForm />
            <div className="mt-2 flex flex-col items-center gap-2">
              <Button
                variant={"ghost"}
                size={"lg"}
                className="w-full"
                onClick={onSwitchToLogin}
                asChild
              >
                <Link href="/login" className="hover:text-primary">
                  Iniciar sesión
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
