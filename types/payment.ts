export interface Payment {
  id?: string;
  studentId?: string;
  feeType: string;
  paymentMethod: string;
  bankDetails: string;
  amount: number;
  date?: string;
}
