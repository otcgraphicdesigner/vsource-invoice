import { ReactNode } from "react";
import { AdminLayout } from "@/layouts/admin-layout";

export default function Layout({ children }: { children: ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
