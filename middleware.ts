import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow these through without auth check
  if (
    pathname.startsWith("/auth") ||
    pathname.startsWith("/access-denied") ||
    pathname === "/sign-in"
  ) {
    return NextResponse.next();
  }

  // Check for Supabase session cookie (lightweight — full auth validated in layout.tsx)
  const cookies = request.cookies.getAll();
  const hasSession = cookies.some(
    (c) => c.name.startsWith("sb-") && c.name.endsWith("-auth-token")
  );

  if (!hasSession) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpeg|.*\\.jpg|.*\\.svg|.*\\.ttf|.*\\.woff2).*)",
  ],
};
