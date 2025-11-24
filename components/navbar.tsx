"use client";

import { User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRole } from "@/hooks/useRole";

export function Navbar() {
  const role = useRole();

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white/90 px-6 backdrop-blur">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">VSource Education</h1>
        <p className="text-xs text-slate-500">Admin Panel</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 hover:bg-slate-50">
          <Avatar>
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-slate-700">{role || "Guest"}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Profile</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
