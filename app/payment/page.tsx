import { BaseModal } from "@/components/modals/base-modal";
import { DataTable } from "@/components/table/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Payment } from "@/types/payment";

const payments: Payment[] = [];

export default function PaymentPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Make Payment</CardTitle>
          <BaseModal title="Add Payment" trigger={<Button>New Payment</Button>}>
            <div className="space-y-3">
              <input className="w-full rounded border border-slate-200 px-3 py-2 text-sm" placeholder="Fee Type" />
              <input className="w-full rounded border border-slate-200 px-3 py-2 text-sm" placeholder="Payment Method" />
              <input className="w-full rounded border border-slate-200 px-3 py-2 text-sm" placeholder="Bank Details" />
              <input className="w-full rounded border border-slate-200 px-3 py-2 text-sm" placeholder="Amount" />
              <Button className="w-full">Generate Invoice</Button>
            </div>
          </BaseModal>
        </CardHeader>
        <CardContent>
          <DataTable columns={[{ key: "feeType", label: "Fee Type" }, { key: "amount", label: "Amount" }, { key: "paymentMethod", label: "Method" }]} data={payments} />
        </CardContent>
      </Card>
    </div>
  );
}
