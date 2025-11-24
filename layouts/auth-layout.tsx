import { ReactNode } from "react";
import Image from "next/image";

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 p-6">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,#dc2626,transparent_25%),radial-gradient(circle_at_bottom_right,#1e73be,transparent_25%)]" />
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-200">
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-red-600 to-secondary text-white p-8">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Image src="/logo.svg" alt="VSource Education" width={48} height={48} />
              <div>
                <h1 className="text-2xl font-semibold">VSource Education</h1>
                <p className="text-sm text-white/80">Admin Portal</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Welcome back</h2>
            <p className="text-white/90">Manage students, payments, and operations from a unified dashboard.</p>
          </div>
          <p className="text-xs text-white/80">Secure double-step authentication protects sensitive records.</p>
        </div>
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
