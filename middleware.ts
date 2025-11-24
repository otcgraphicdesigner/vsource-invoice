import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const PUBLIC_PATHS = ["/auth/login", "/api/auth/login", "/_next", "/favicon.ico", "/logo.svg"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  const token = cookies().get("vsource_token")?.value;
  const role = cookies().get("vsource_role")?.value;

  if (!token || !role) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/student-registration/:path*", "/student-list/:path*", "/sub-admin/:path*", "/payment/:path*", "/transactions/:path*", "/invoice/:path*", "/employee-logins/:path*"],
};
