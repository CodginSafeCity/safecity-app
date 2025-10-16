"use client";
import { Check, CircleCheckBig, GalleryVerticalEnd } from "lucide-react";
import RegisterForm from "../../components/RegisterForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ForgotPasswordForm from "../../components/ForgotPasswordForm";
import { useState } from "react";

const ForgotPasswordPage = () => {
  const [linkSended, setLinkSended] = useState<boolean>(false);

  const onSwitchToLogin = () => {
    // Logic to switch to the login page
  };
  return (
    <div className="grid min-h-svh lg:grid-cols-1">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            {/* Link sended message */}
            {linkSended ? (
              <div>
                <div className="my-8 flex flex-col items-center gap-2">
                  <a
                    href="#"
                    className="flex flex-col items-center gap-2 font-medium"
                  >
                    <div className="flex size-8 items-center justify-center rounded-md">
                      <CircleCheckBig
                        className="size-20 text-green-600"
                        // size={64}
                      />
                    </div>
                    <span className="sr-only">Safe City Inc.</span>
                  </a>
                  <h1 className="text-xl text-center font-bold">
                    Enlace enviado
                  </h1>
                  <div className="bg-green-50 p-4 rounded-md">
                    <p className="text-green-800">
                      Se le ha enviado un enlace de restablecimiento a su
                      correo, por favor revise su bandeja de entrada.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
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
                    Ingresa tu correo electrónico para restablecer tu
                    contraseña, se le enviará un enlace de restablecimiento.
                  </p>
                </div>
                <ForgotPasswordForm
                  linkSended={(state) => setLinkSended(state)}
                />
              </div>
            )}
            <div className="mt-2 flex flex-col items-center gap-2">
              <Button
                variant={linkSended ? "default" : "outline"}
                size={"lg"}
                className="w-full"
                onClick={onSwitchToLogin}
                asChild
              >
                <Link href="/">Iniciar sesión</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
