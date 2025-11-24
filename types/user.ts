export type UserRole = "SuperAdmin" | "Admin" | "SubAdmin" | "Accountant";

export interface User {
  email: string;
  password: string;
  employeeId: string;
  name: string;
  role: UserRole;
}
