export interface accountDetail {
  voucherID:string;
  marketID:string;
  settledDate:string;
  code:string;
  narration:string;
  debit:string;
  credit:string;
  runningBalance:string;
}


export interface AccountDetails {
  code: string;
  isLastPage: boolean;
  totalPages: number;
  name: string;
  list: Transaction[];
  bal: string;
  currentPage: number;
  isFirstPage: boolean;
  totalElements: number;
  coin: number;
  status: boolean;
}

export interface Transaction {
  bal: string;
  wonBy: string;
  date: string;
  pay: PaymentDetail;
}

interface PaymentDetail {
  matchcode: number | null;
  debit: string;
  credit: string;
  paymenttype: null;
  remark: string;
  type: string;
  datetime: string;
}
