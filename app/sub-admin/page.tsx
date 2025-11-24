import { BaseModal } from "@/components/modals/base-modal";
import { DataTable } from "@/components/table/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SubAdmin {
  id?: string;
  name: string;
  email: string;
  role: string;
}

const subAdmins: SubAdmin[] = [];

export default function SubAdminPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle>Sub Admins</CardTitle>
          <BaseModal
            title="Add Sub Admin"
            description="Create a new sub admin account"
            trigger={<Button>Add Sub Admin</Button>}
          >
            <div className="space-y-3">
              <input className="w-full rounded border border-slate-200 px-3 py-2 text-sm" placeholder="Name" />
              <input className="w-full rounded border border-slate-200 px-3 py-2 text-sm" placeholder="Email" />
              <input className="w-full rounded border border-slate-200 px-3 py-2 text-sm" placeholder="Role" />
              <Button className="w-full">Save</Button>
            </div>
          </BaseModal>
        </CardHeader>
        <CardContent>
          <DataTable columns={[{ key: "name", label: "Name" }, { key: "email", label: "Email" }, { key: "role", label: "Role" }]} data={subAdmins} />
        </CardContent>
      </Card>
    </div>
  );
}
