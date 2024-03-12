import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Fancy } from '../../../interface/fancy.interface';

@Component({
  selector: 'app-fancy-reports',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './fancy-reports.component.html',
  styleUrl: './fancy-reports.component.css'
})
export class FancyReportsComponent {
  selectedOption: string='';
  options: { value: string, label: string }[] = [
    { value: 'SETTLED', label: 'SETTLED' },
    { value: 'MATCHED', label: 'MATCHED' },
    { value: 'VOIDED', label: 'VOIDED' },


  ];
  onSelectChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected Value:', selectedValue);
  }
  fancyReports: Fancy[] = [
    {
      marketId: 'MKT001',
      marketName: 'Market 1',
      runnerName: 'Runner A',
      side: 'Buy',
      price: 10.5,
      size: 100,
      placeDate: '2024-03-11'
    },
    {
      marketId: 'MKT002',
      marketName: 'Market 2',
      runnerName: 'Runner B',
      side: 'Sell',
      price: 8.75,
      size: 150,
      placeDate: '2024-03-12'
    },
    {
      marketId: 'MKT003',
      marketName: 'Market 3',
      runnerName: 'Runner C',
      side: 'Buy',
      price: 12.25,
      size: 200,
      placeDate: '2024-03-13'
    },
    {
      marketId: 'MKT004',
      marketName: 'Market 4',
      runnerName: 'Runner D',
      side: 'Sell',
      price: 9.5,
      size: 120,
      placeDate: '2024-03-14'
    },
    {
      marketId: 'MKT005',
      marketName: 'Market 5',
      runnerName: 'Runner E',
      side: 'Buy',
      price: 11.75,
      size: 180,
      placeDate: '2024-03-15'
    }
  ];

  goBack(){
    window.history.back()
  }
}
