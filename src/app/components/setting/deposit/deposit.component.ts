import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-deposit',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent {
  selectedItem: number | null = null;
  constructor(private router:Router){}
  selectItem(index: number) {
    this.selectedItem = index;
  }
  items = [
    { id: 'whatsapp', name: 'WhatsApp', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' },
    { id: 'upi', name: 'UPI', image: 'https://dqqdyv927mezc.cloudfront.net/kheloyar/newdeposit/upi.svg' },
    { id: 'gpay', name: 'Google Pay', image: 'https://dqqdyv927mezc.cloudfront.net/kheloyar/newdeposit/gpay.svg' },
    { id: 'paytm', name: 'Paytm', image: 'https://dqqdyv927mezc.cloudfront.net/kheloyar/newdeposit/paytm.svg' },
    { id: 'phonepe', name: 'PhonePe', image: 'https://dqqdyv927mezc.cloudfront.net/kheloyar/newdeposit/phonepe.svg' },
    { id: 'qrcode', name: 'QR Code', image: 'https://m.kheloyaar360.net/assets/images/payment-deposit/qrcode-icon.png' },
    { id: 'banktransfer', name:'Bank Transfer', image: 'https://dqqdyv927mezc.cloudfront.net/kheloyar/newdeposit/bank-transfer.svg' }
  ];
  goBack(){
    this.router.navigate(['/']);
  }

}
