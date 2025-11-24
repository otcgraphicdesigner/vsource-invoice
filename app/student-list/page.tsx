import { DataTable } from "@/components/table/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Student } from "@/types/student";

const students: Student[] = [];

export default function StudentListPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Student List</CardTitle>
          <div className="flex items-center gap-2">
            <Input placeholder="Search" className="w-64" />
            <Button variant="outline">Filters</Button>
            <Button>Export to Excel</Button>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={[
              { key: "studentName", label: "Name" },
              { key: "emailAddress", label: "Email" },
              { key: "mobileNumber", label: "Mobile" },
              { key: "academicYear", label: "Year" },
            ]}
            data={students}
          />
        </CardContent>
      </Card>
    </div>
  );
}
