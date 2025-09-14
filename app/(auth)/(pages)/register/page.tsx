"use client";
import { Button } from "@/components/ui/button";
import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";
import RegisterForm from "../../components/RegisterForm";

const RegisterPage = () => {
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
              <h1 className="text-xl text-center font-bold">Safe City.</h1>
              <p className="text-muted-foreground">
                Crea tu cuenta para reportar incidentes
              </p>
            </div>
            <RegisterForm />
            <div className="mt-6 flex flex-col items-center gap-2">
              <p className="px-8 text-center text-sm text-muted-foreground">
                ¿Ya tienes cuenta?{" "}
              </p>
              <Button
                variant="outline"
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

export default RegisterPage;
