import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profit-loss',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './profit-loss.component.html',
  styleUrl: './profit-loss.component.css'
})
export class ProfitLossComponent {

  profitLossData:any[] = [
      {  Event: 'Cricket',ProfitLoss: '-100' },
      {  Event: 'QT Casino',ProfitLoss: '738' },

    ];


  calculateTotal(): string | number {
    // Calculate total from the profitLossData array
    let total = 0;
    this.profitLossData.forEach(item => {
      if (!isNaN(Number(item.ProfitLoss))) {
        total += Number(item.ProfitLoss);
      }
    });
    return total;
  }

}
