import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExistingAccount, Transaction } from './existing-account.intrface';

@Component({
  selector: 'app-withdrow',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './withdrow.component.html',
  styleUrl: './withdrow.component.css'
})
export class WithdrowComponent {
  paymentForm!: FormGroup;
  isClicked: boolean = false;
  existingAccountForm!:FormGroup;
  activeCard: any = null;
  tickImage: string = 'https://dqqdyv927mezc.cloudfront.net/kheloyar/web/tick.svg';
  yellowTickImage: string = '../../../../assets/yellow.png';
  existingAccount:ExistingAccount[]=[
    {accountName:'Rohan More',accountNumber:2134756384756457,bank:'State Bank Of India'},
    {accountName:'Ayus Khanth',accountNumber:2134756384756457,bank:'Bank of Broda'},

  ];
  transactions:Transaction[] = [
    { transactionNo: 'TRX001', amount: 100.50, status: 'Completed', dateTime: '2024-02-26 10:30:00' },
    { transactionNo: 'TRX002', amount: 200.75, status: 'Pending', dateTime: '2024-02-26 11:45:00' },
    { transactionNo: 'TRX003', amount: 50.20, status: 'Failed', dateTime: '2024-02-26 13:15:00' },
    { transactionNo: 'TRX004', amount: 300.00, status: 'Completed', dateTime: '2024-02-26 14:20:00' },
    { transactionNo: 'TRX005', amount: 150.80, status: 'Pending', dateTime: '2024-02-26 15:45:00' }
  ];
  ngOnInit() {
    this.paymentForm = new FormGroup({
      'holderName': new FormControl(null, Validators.required),
      'bankName': new FormControl(null, Validators.required),
      'branchName': new FormControl(null, Validators.required),
      'accountNumber': new FormControl(null, Validators.required),
      'ibanNumber': new FormControl(null, Validators.required)
    });

    this.existingAccountForm = new FormGroup({
      'accountNumber': new FormControl(null),
      'accountName':new FormControl(null),
      'amount':new FormControl(null)
    });

  }
  onSubmit() {
    // Here you would usually send the form data to a server
    console.log(this.paymentForm.value);
  }
  setActive(card: any) {
    console.log(card);
    this.activeCard = card;
    this.existingAccountForm.patchValue({
      accountNumber: card.accountNumber,
      accountName: card.accountName,
      // Do not set 'amount' if you want to leave it unchanged
    });
  }
  setAmount(amount:any) {
    this.isClicked = !this.isClicked;
    this.existingAccountForm.patchValue({
      amount:amount
    })
  }


}
