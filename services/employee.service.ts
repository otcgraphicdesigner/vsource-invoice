import { api } from "@/lib/axios";
import { EmployeeLogin } from "@/types/employee";

export async function fetchEmployeeLogins() {
  const { data } = await api.get<EmployeeLogin[]>("/employee-logins");
  return data;
}
