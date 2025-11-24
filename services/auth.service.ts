import { api } from "@/lib/axios";
import { User } from "@/types/user";

export interface LoginStepOnePayload {
  email: string;
  password: string;
}

export interface LoginStepTwoPayload extends LoginStepOnePayload {
  employeeId: string;
}

export async function loginStepOne(payload: LoginStepOnePayload) {
  const { data } = await api.post<{ employeeId: string; name: string }>("/auth/login", { ...payload, step: 1 });
  return data;
}

export async function loginStepTwo(payload: LoginStepTwoPayload) {
  const { data } = await api.post<{ token: string; role: User["role"]; name: string }>("/auth/login", {
    ...payload,
    step: 2,
  });
  return data;
}

export async function logout() {
  await api.post("/auth/logout");
}
