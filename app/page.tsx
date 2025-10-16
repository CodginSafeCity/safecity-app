"use client";
import { useEffect } from "react";
import LoginPage from "./(auth)/(pages)/login/page";
import { useAuthStore } from "@/store/auth-store";
import useUserAuth from "./(auth)/hooks/use-user-auth";
import { LoadingComponent } from "@/components/loading";
import { redirect, useRouter } from "next/navigation";
import { GalleryVerticalEnd } from "lucide-react";
import LoginForm from "./(auth)/components/LoginForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const { isAuthenticated, isLoading } = useUserAuth();

  useEffect(() => {
    console.log("hahahah");
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("SW registrado:", registration);
          })
          .catch((error) => {
            console.log("Error registrando SW:", error);
          });
      });
    }
  }, []);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (!isLoading && isAuthenticated) {
    redirect("/dashboard");
  }

  // return <LoginPage />;
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
                Inicia sesión para reportar incidentes de seguridad
              </p>
            </div>
            <LoginForm />
            <div className="mt-6 flex flex-col items-center gap-2">
              <p className="px-8 text-center text-sm text-muted-foreground">
                ¿No tienes una cuenta?{" "}
              </p>
              <Button variant="outline" size={"lg"} className="w-full" asChild>
                <Link href="/register" className="hover:text-primary">
                  Regístrate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
