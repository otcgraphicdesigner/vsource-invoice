import { DataTable } from "@/components/table/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Transaction } from "@/types/transaction";

const transactions: Transaction[] = [];

export default function TransactionsPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Transactions</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline">Filters</Button>
            <Button>Generate Invoice</Button>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={[
              { key: "studentName", label: "Student" },
              { key: "feeType", label: "Fee Type" },
              { key: "amount", label: "Amount" },
              { key: "status", label: "Status" },
              { key: "date", label: "Date" },
            ]}
            data={transactions}
          />
        </CardContent>
      </Card>
    </div>
  );
}
