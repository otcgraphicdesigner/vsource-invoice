import * as React from "react";
import { cn } from "@/lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto">
    <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
  </div>
));
Table.displayName = "Table";

const TableHeader = ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className={cn("[&_tr]:border-b", className)} {...props} />
);

const TableBody = ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />
);

const TableFooter = ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tfoot className={cn("bg-slate-100 font-medium text-slate-900", className)} {...props} />
);

const TableRow = ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr className={cn("border-b transition-colors hover:bg-slate-50", className)} {...props} />
);

const TableHead = ({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
  <th
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-slate-500 [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
);

const TableCell = ({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <td className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
);

const TableCaption = ({ className, ...props }: React.HTMLAttributes<HTMLTableCaptionElement>) => (
  <caption className={cn("mt-4 text-sm text-slate-500", className)} {...props} />
);

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
