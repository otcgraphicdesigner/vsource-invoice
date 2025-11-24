"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Menu, LayoutDashboard, Users, FileSignature, CreditCard, Receipt, ShieldCheck, ScrollText, ListChecks } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useRole } from "@/hooks/useRole";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard, roles: ["SuperAdmin", "Admin", "SubAdmin", "Accountant"] },
  { href: "/student-registration", label: "Student Registration", icon: FileSignature, roles: ["SuperAdmin", "Admin", "SubAdmin"] },
  { href: "/student-list", label: "Students", icon: Users, roles: ["SuperAdmin", "Admin", "SubAdmin"] },
  { href: "/payment", label: "Make Payment", icon: CreditCard, roles: ["SuperAdmin", "Admin", "Accountant"] },
  { href: "/transactions", label: "Transactions", icon: Receipt, roles: ["SuperAdmin", "Admin", "Accountant"] },
  { href: "/sub-admin", label: "Sub Admin", icon: ShieldCheck, roles: ["SuperAdmin", "Admin"] },
  { href: "/employee-logins", label: "Employee Logins", icon: ListChecks, roles: ["SuperAdmin", "Admin"] },
];

function NavigationList({ role }: { role: string | null }) {
  const pathname = usePathname();
  const items = useMemo(() => NAV_ITEMS.filter((item) => !role || item.roles.includes(role)), [role]);

  return (
    <nav className="space-y-1">
      {items.map((item) => {
        const Icon = item.icon;
        const active = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100",
              active && "bg-slate-100 text-slate-900"
            )}
          >
            <Icon className="h-4 w-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function Sidebar() {
  const role = useRole();

  return (
    <aside className="relative flex w-64 flex-col border-r border-slate-200 bg-white/80 px-4 py-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="text-lg font-semibold text-slate-900">Menu</div>
        <div className="lg:hidden">
          <MobileSidebar role={role} />
        </div>
      </div>
      <div className="hidden lg:block">
        <NavigationList role={role} />
      </div>
    </aside>
  );
}

function MobileSidebar({ role }: { role: string | null }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-72" side="left">
        <div className="pb-4 pt-10">
          <NavigationList role={role} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
