import { api } from "@/lib/axios";
import { Payment } from "@/types/payment";

export async function fetchPayments() {
  const { data } = await api.get<Payment[]>("/payments");
  return data;
}

export async function submitPayment(payload: Payment) {
  const { data } = await api.post<Payment>("/payments", payload);
  return data;
}
