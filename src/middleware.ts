import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const commonPrivateRoutes = [
  "/dashboard",
  "/dashboard/profile",
  "/blood-request",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = cookies().get("token")?.value;

  if (
    token &&
    (commonPrivateRoutes.includes(pathname) ||
      commonPrivateRoutes.some((route) => pathname.startsWith(route)))
  ) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const decodedToken = jwtDecode(token) as { role: string };

  if (decodedToken?.role === "ADMIN" && pathname === "/dashboard/admin") {
    return NextResponse.next();
  }

  if (decodedToken?.role === "USER" && pathname === "/dashboard/user") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/dashboard/:page*", "/blood-request/:page*"],
};
