import { Injectable } from '@angular/core';
import { accountDetail } from './accounts-statement/account-statement.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  // generateDummyData(): accountDetail[] {
  //   const dummyData: accountDetail[] = [];

  //   for (let i = 1; i <= 20; i++) {
  //     dummyData.push({
  //       voucherID: 'Voucher' + i,
  //       marketID: 'Market' + i,
  //       settledDate: '2024-02-' + (i < 10 ? '0' + i : i) + ' 12:00:00',
  //       narration: 'Transaction ' + i,
  //       debit: '100',
  //       credit: '100',
  //       runningBalance: '1000'
  //     });
  //   }

  //   return dummyData;
  // }

}
