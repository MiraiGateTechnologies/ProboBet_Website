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
export interface TransactionBank {
  accountNumber: string;
  hodlerNumber: string;
  ifscCode: string;
  bankName: string;
  branchName: string;
  paymentOptions: string;
  dateTime: string;
}
