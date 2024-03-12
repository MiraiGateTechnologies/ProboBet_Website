import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deposit-withdraw-request-history',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './deposit-withdraw-request-history.component.html',
  styleUrl: './deposit-withdraw-request-history.component.css'
})
export class DepositWithdrawRequestHistoryComponent {
  activeTab: string = 'withdrawalRequests'; // Set 'home' as the default active tab
  transactions:any[] = [
    { requestedAmount	: 500, amount: 100.50, status: 'Completed', dateTime: '2024-02-26 10:30:00' },
    { requestedAmount: 455, amount: 200.75, status: 'Pending', dateTime: '2024-02-26 11:45:00' },
    { requestedAmount: 4553, amount: 50.20, status: 'Failed', dateTime: '2024-02-26 13:15:00' },
    { requestedAmount: 2000, amount: 300.00, status: 'Completed', dateTime: '2024-02-26 14:20:00' },
    { requestedAmount: 788, amount: 150.80, status: 'Pending', dateTime: '2024-02-26 15:45:00' }
  ];
  goBack(){
    window.history.back()
  }
}
