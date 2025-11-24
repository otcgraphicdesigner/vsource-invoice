import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const styles: Record<NonNullable<BadgeProps["variant"]>, string> = {
    default: "bg-slate-100 text-slate-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-amber-100 text-amber-800",
    outline: "border border-slate-200 text-slate-700",
  };

  return <div className={cn("inline-flex items-center rounded-full px-2 py-1 text-xs font-medium", styles[variant], className)} {...props} />;
}
