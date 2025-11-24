import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function InvoiceView() {
  return (
    <Card className="mx-auto max-w-4xl bg-white shadow">
      <CardContent className="space-y-6 p-8">
        <div className="flex items-start justify-between">
          <div>
            <Image src="/logo.svg" alt="VSource" width={64} height={64} />
            <p className="text-sm text-slate-500">VSource Education Pvt Ltd</p>
            <p className="text-sm text-slate-500">123 Knowledge Park, Bangalore</p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-semibold text-slate-900">Invoice</h2>
            <p className="text-sm text-slate-600">#INV-0001</p>
            <p className="text-sm text-slate-600">Date: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold text-slate-900">Bill To</h3>
            <p className="text-slate-600">Student Name</p>
            <p className="text-slate-600">Address line</p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Bank Details</h3>
            <p className="text-slate-600">Bank: XYZ Bank</p>
            <p className="text-slate-600">Account: 1234567890</p>
            <p className="text-slate-600">IFSC: IFSC0001</p>
          </div>
        </div>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-left">Description</th>
              <th className="py-2 text-left">Qty</th>
              <th className="py-2 text-left">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Service Charge</td>
              <td className="py-2">1</td>
              <td className="py-2">$1200</td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-end gap-6 text-sm">
          <div className="space-y-2">
            <div className="flex justify-between gap-8">
              <span className="text-slate-600">Subtotal</span>
              <span>$1200</span>
            </div>
            <div className="flex justify-between gap-8">
              <span className="text-slate-600">Total</span>
              <span className="font-semibold">$1200</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6">
          <p className="text-sm text-slate-600">Authorised Signature</p>
          <Button onClick={() => window.print()}>Print</Button>
        </div>
      </CardContent>
    </Card>
  );
}
