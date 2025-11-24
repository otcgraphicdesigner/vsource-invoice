import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface DataTableProps<T> {
  columns: { key: keyof T; label: string }[];
  data: T[];
}

export function DataTable<T extends object>({ columns, data }: DataTableProps<T>) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={String(col.key)}>{col.label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, idx) => (
          <TableRow key={idx}>
            {columns.map((col) => (
              <TableCell key={String(col.key)}>{String(row[col.key])}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
