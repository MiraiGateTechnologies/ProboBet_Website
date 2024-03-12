import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-casino-reports',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './casino-reports.component.html',
  styleUrl: './casino-reports.component.css'
})
export class CasinoReportsComponent {
  selectedOption: string='';
  options: { value: string, label: string }[] = [
    { value: 'SETTLED', label: 'SETTLED' },
    { value: 'MATCHED', label: 'MATCHED' },
    { value: 'CANCEL', label: 'CANCEL' },
    { value: 'VOIDED', label: 'VOIDED' },
    { value: 'LAPSED', label: 'LAPSED' },
    { value: 'UN-MATCHED', label: 'UN-MATCHED' }
  ];
  dummyCasinoData:any[] = [
    {
      gameCode: 'GC001',
      gameName: 'Blackjack',
      roundId: 'R001',
      marketName: 'Main Market',
      runnerName: 'Player 1',
      side: 'Back',
      price: 2.5,
      size: 10,
      placedDate: '2024-03-12',
    },
    {
      gameCode: 'GC002',
      gameName: 'Roulette',
      roundId: 'R002',
      marketName: 'Red or Black',
      runnerName: 'Red',
      side: 'Lay',
      price: 1.8,
      size: 5,
      placedDate: '2024-03-13',
    },
    {
      gameCode: 'GC003',
      gameName: 'Slots',
      roundId: 'R003',
      marketName: 'Jackpot',
      runnerName: 'Symbol A',
      side: 'Back',
      price: 3.0,
      size: 20,
      placedDate: '2024-03-14',
    },
    {
      gameCode: 'GC004',
      gameName: 'Poker',
      roundId: 'R004',
      marketName: 'Royal Flush',
      runnerName: 'Player 2',
      side: 'Back',
      price: 4.5,
      size: 15,
      placedDate: '2024-03-15',
    },
    {
      gameCode: 'GC005',
      gameName: 'Baccarat',
      roundId: 'R005',
      marketName: 'Banker vs Player',
      runnerName: 'Banker',
      side: 'Lay',
      price: 2.0,
      size: 25,
      placedDate: '2024-03-16',
    },
  ];
  onSelectChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected Value:', selectedValue);
  }
  goBack(){
    window.history.back()
  }

}
