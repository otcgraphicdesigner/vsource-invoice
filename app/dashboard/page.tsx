import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  { title: "Active Students", value: "1,240", description: "Current enrolled" },
  { title: "Pending Payments", value: "$84,200", description: "Awaiting clearance" },
  { title: "Invoices", value: "342", description: "Generated this month" },
  { title: "Teams", value: "6", description: "Operational squads" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-gradient-to-r from-red-600 to-secondary px-6 py-8 text-white shadow-lg">
        <h1 className="text-2xl font-semibold">Welcome to VSource Education</h1>
        <p className="text-sm text-white/80">Track operations, monitor payments, and manage students in one place.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Button variant="secondary">Create Invoice</Button>
          <Button variant="outline" className="text-white border-white/70 hover:bg-white/10">
            View Reports
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <Card key={item.title}>
            <CardHeader>
              <CardDescription>{item.title}</CardDescription>
              <CardTitle className="text-2xl">{item.value}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-500">{item.description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
