export interface ExistingAccount {
  accountNumber:number;
  accountName:string;
  bank:string;
}
export interface Transaction {
  transactionNo: string;
  amount: number;
  status: string;
  dateTime: string;
}
