import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/^/dashboard/.*/"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  const isProtectedRoute = request.nextUrl.pathname.startsWith("/dashboard");

  console.log("✅ Middleware ejecutado en:", request.nextUrl.pathname);
  console.log("🔒 Token:", token);
  console.log("🚫 Ruta protegida:", isProtectedRoute);

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // matcher: ["/((?!_next).*)"],
  matcher: ["/dashboard/:path*", "/profile/:path*", "/admin/:path*"],
};
