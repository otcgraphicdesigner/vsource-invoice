import { api } from "@/lib/axios";
import { Transaction } from "@/types/transaction";

export async function fetchTransactions() {
  const { data } = await api.get<Transaction[]>("/transactions");
  return data;
}

export async function updateTransaction(id: string, payload: Partial<Transaction>) {
  const { data } = await api.patch<Transaction>(`/transactions/${id}`, payload);
  return data;
}
