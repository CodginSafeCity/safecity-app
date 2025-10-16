"use client";
import { useEffect } from "react";
import LoginPage from "./(auth)/(pages)/login/page";
import { useAuthStore } from "@/store/auth-store";
import useUserAuth from "./(auth)/hooks/use-user-auth";
import { LoadingComponent } from "@/components/loading";
import { redirect, useRouter } from "next/navigation";

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

  return <LoginPage />;
}
