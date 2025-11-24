import { DataTable } from "@/components/table/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { EmployeeLogin } from "@/types/employee";

const logins: EmployeeLogin[] = [];

export default function EmployeeLoginsPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Employee Logins</CardTitle>
          <div className="flex gap-2">
            <Input placeholder="Search" className="w-64" />
            <Input type="date" />
          </div>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={[
              { key: "employeeId", label: "Employee ID" },
              { key: "name", label: "Name" },
              { key: "username", label: "Username" },
              { key: "role", label: "Role" },
              { key: "date", label: "Date" },
              { key: "time", label: "Time" },
            ]}
            data={logins}
          />
        </CardContent>
      </Card>
    </div>
  );
}
