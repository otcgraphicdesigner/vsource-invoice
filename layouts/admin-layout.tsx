import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 space-y-6">{children}</main>
      </div>
    </div>
  );
}
