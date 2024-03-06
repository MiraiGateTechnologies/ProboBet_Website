import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
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

  transactions:any[] = [
    { transactionNo: 'Colombian Primera A	', amount: 100.50, status: 'Completed', dateTime: '2024-02-26 10:30:00' },
    { transactionNo: 'CONMEBOL Copa Libertadores	', amount: 200.75, status: 'Pending', dateTime: '2024-02-26 11:45:00' },
    { transactionNo: 'Bolivian Liga de Futbol Profesional	', amount: 50.20, status: 'Failed', dateTime: '2024-02-26 13:15:00' },
    { transactionNo: 'CONCACAF Champions League	', amount: 300.00, status: 'Completed', dateTime: '2024-02-26 14:20:00' },
    { transactionNo: 'TRX005', amount: 150.80, status: 'Pending', dateTime: '2024-02-26 15:45:00' }
  ];
  goBack(){
    window.history.back()
  }
}
