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
  isClicked500=false;
  isClicked5000= false;
  isClicked10000= false
  isClicked200000= false
  isClicked500000 =false
  isClicked1000000 =false
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
      'accountNumber': new FormControl(null, [Validators.required, Validators.maxLength(16)]),
      'ibanNumber': new FormControl(null, Validators.required)
    });

    this.existingAccountForm = new FormGroup({
      'accountNumber': new FormControl(null),
      'accountName':new FormControl(null),
      'amount':new FormControl(null)
    });

  }
  paymentOptions = [
    { label: 'Bank', value: 'bank', backgroundColor: 'red' }, // Example option
    // Add more options as needed
  ];
  onChange(selectedValue: string) {
    // Handle selection change if needed
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
    this.isClicked500=false;
    this.isClicked5000= false;
    this.isClicked10000= false
    this.isClicked200000= false
    this.isClicked500000 =false
    this.isClicked1000000 =false
    if (amount === '500') {
      this.isClicked500 = true;
  } else if (amount === '5000') {
      this.isClicked5000 = true;
  } else if (amount === '10000') {
      this.isClicked10000 = true;
  } else if (amount === '200000') {
    this.isClicked200000 = true;
} else if (amount === '500000') {
    this.isClicked500000 = true;
} else if (amount === '1000000') {
  this.isClicked1000000 = true;
}

    this.existingAccountForm.patchValue({
      amount:amount
    })
  }
  goBack(){
    window.history.back()
  }

}
