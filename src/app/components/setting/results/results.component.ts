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
  resultData: any[] = [
    {
      competitionName: 'Football League',
      eventName: 'Match 1',
      marketName: 'Full Time Result',
      result: 'Home Win',
    },
    {
      competitionName: 'Basketball Championship',
      eventName: 'Game 1',
      marketName: 'Point Spread',
      result: 'Team A +5',
    },
    {
      competitionName: 'Tennis Tournament',
      eventName: 'Final Match',
      marketName: 'Set Winner',
      result: 'Player 1',
    },
    {
      competitionName: 'Cricket Series',
      eventName: 'ODI 3',
      marketName: 'Total Runs',
      result: 'Team B: 250',
    },
    {
      competitionName: 'Golf Cup',
      eventName: 'Round 1',
      marketName: 'Winner',
      result: 'Player C',
    },
  ];
  options: { value: string, label: string }[] = [
    { value: 'Fancy', label: 'Fancy' },
    { value: 'Soccer', label: 'Soccer' },
    { value: 'Tennis', label: 'Tennis' },
    { value: 'Golf', label: 'Golf' },
    { value: 'Cricket', label: 'Cricket' },
    { value: 'Boxing', label: 'Boxing' }
  ];

  onSelectChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected Value:', selectedValue);
  }



  goBack(){
    window.history.back()
  }
}
