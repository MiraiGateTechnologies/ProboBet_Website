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
  onSelectChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected Value:', selectedValue);
  }
  goBack(){
    window.history.back()
  }
}
