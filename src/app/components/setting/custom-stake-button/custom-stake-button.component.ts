import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-stake-button',
  standalone: true,
  imports: [],
  templateUrl: './custom-stake-button.component.html',
  styleUrl: './custom-stake-button.component.css'
})
export class CustomStakeButtonComponent {
  buttonAmounts: { [key: string]: number } = {
    'Button 1': 200,
    'Button 2': 500,
    'Button 3': 1000,
    'Button 4': 5000,
    'Button 5': 10000,
    'Button 6': 25000
    // Add more if needed
  };
  handleInputChange(buttonKey: string, event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.buttonAmounts[buttonKey] = Number(value);
    console.log(this.buttonAmounts)
    // Here you can also call the stakeService to update the value
    // For simplicity, the example doesn't include service integration
  }
}
