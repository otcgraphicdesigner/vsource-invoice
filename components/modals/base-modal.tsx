"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface BaseModalProps {
  title: string;
  description?: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

export function BaseModal({ title, description, trigger, children }: BaseModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="text-lg font-semibold text-slate-900">{title}</Dialog.Title>
              {description && <Dialog.Description className="text-sm text-slate-600">{description}</Dialog.Description>}
            </div>
            <Dialog.Close className={cn("rounded-full p-1 text-slate-500 hover:bg-slate-100")}>
              <X className="h-4 w-4" />
            </Dialog.Close>
          </div>
          <div className="mt-4">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
