import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import users from "@/lib/users.json";
import { User } from "@/types/user";

const TOKEN_KEY = "vsource_token";
const ROLE_KEY = "vsource_role";
const NAME_KEY = "vsource_name";

export function verifyCredentials(email: string, password: string, employeeId?: string) {
  const match = (users as User[]).find(
    (user) => user.email === email && user.password === password && (!employeeId || user.employeeId === employeeId)
  );
  return match || null;
}

export function setAuthCookies(user: User) {
  const cookieStore = cookies();
  cookieStore.set(TOKEN_KEY, `${user.email}-token`, { httpOnly: true, secure: process.env.NODE_ENV === "production" });
  cookieStore.set(ROLE_KEY, user.role, { httpOnly: true, secure: process.env.NODE_ENV === "production" });
  cookieStore.set(NAME_KEY, user.name, { httpOnly: true, secure: process.env.NODE_ENV === "production" });
}

export function clearAuthCookies() {
  const cookieStore = cookies();
  cookieStore.delete(TOKEN_KEY);
  cookieStore.delete(ROLE_KEY);
  cookieStore.delete(NAME_KEY);
}

export function getAuthToken() {
  if (typeof document !== "undefined") {
    return undefined;
  }
  try {
    const cookieStore = cookies();
    return cookieStore.get(TOKEN_KEY)?.value;
  } catch (error) {
    return undefined;
  }
}

export function getUserRole() {
  try {
    const cookieStore = cookies();
    return cookieStore.get(ROLE_KEY)?.value;
  } catch (error) {
    return undefined;
  }
}

export function requireRole(allowedRoles: string[], request: Request) {
  const role = cookies().get(ROLE_KEY)?.value;
  if (role && allowedRoles.includes(role)) return NextResponse.next();
  return NextResponse.redirect(new URL("/auth/login", request.url));
}
