import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-bets',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './my-bets.component.html',
  styleUrl: './my-bets.component.css'
})
export class MyBetsComponent {
  selectedOption: string='';
  options: { value: string, label: string }[] = [
    { value: 'SETTLED', label: 'SETTLED' },
    { value: 'MATCHED', label: 'MATCHED' },
    { value: 'CANCEL', label: 'CANCEL' },
    { value: 'VOIDED', label: 'VOIDED' },
    { value: 'LAPSED', label: 'LAPSED' },
    { value: 'UN-MATCHED', label: 'UN-MATCHED' }
  ];

  onSelectChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected Value:', selectedValue);
  }
  goBack(){
    window.history.back()
  }
}
