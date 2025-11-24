import "@/styles/globals.css";
import "@/styles/theme.css";
import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "VSource Education",
  description: "Admin panel for VSource Education",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
