"use client";
import { Button } from "@/components/ui/button";
import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";
import ResetPasswordForm from "../../components/ResetPasswordForm";
import { Suspense, useState } from "react";

const ResetPasswordPage = () => {
  const [passwordReseted, setPasswordReseted] = useState<boolean>(false);

  const onSwitchToLogin = () => {
    // Logic to switch to the login page
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-1">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            {!passwordReseted ? (
              <>
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
                    Actualizar contraseña
                  </h1>
                  <p className="text-muted-foreground">
                    Asegura la seguridad de tu cuenta eligiendo una nueva
                    contraseña. Asegúrate de que sea fuerte y única para
                    proteger tu información personal.
                  </p>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                  <ResetPasswordForm isResetPassword={setPasswordReseted} />
                </Suspense>
              </>
            ) : (
              <>
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
                    Contraseña actualizada
                  </h1>
                  <p className="text-muted-foreground">
                    Tu contraseña ha sido actualizada exitosamente. Ahora puedes
                    iniciar sesión con tu nueva contraseña.
                  </p>
                </div>
              </>
            )}
            <div className="mt-2 flex flex-col items-center gap-2">
              <Button
                variant={passwordReseted ? "default" : "ghost"}
                size={"lg"}
                className="w-full"
                onClick={onSwitchToLogin}
                asChild
              >
                <Link href="/login">Iniciar sesión</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
