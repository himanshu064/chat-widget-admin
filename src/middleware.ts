import { NextResponse } from "next/server";
import { DEFAULT_REDIRECT, PUBLIC_ROUTES, ROOT, COMMON_ROUTES } from "@/lib/routes";
import { auth } from "./auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isAuthenticated = !!req.auth?.user;
  const pathname = nextUrl.pathname;

  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  const isCommonRoute = COMMON_ROUTES.includes(pathname);

  if (isAuthenticated) {
    // Redirect authenticated users away from public routes
    if (isPublicRoute) {
      return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
    }
  } else {
    // Redirect unauthenticated users away from non-public and non-common routes
    if (!isPublicRoute && !isCommonRoute) {
      return Response.redirect(new URL(ROOT, nextUrl));
    }
  }

  // Allow access to the requested route
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|assets|_next/static|_next/image|favicon.ico).*)"],
};
