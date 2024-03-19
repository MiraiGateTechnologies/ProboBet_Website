import { Component } from '@angular/core';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.css'
})
export class VerificationComponent {
  selectedCountryConfig = {
    hideCode: true,
    hideName: true
  };
  countryListConfig = {
    hideCode: true,

  };
  onCountryChange(country: any) {
    console.log(country);
  }

}
