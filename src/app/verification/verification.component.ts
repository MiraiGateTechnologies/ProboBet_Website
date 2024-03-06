import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [NgxCountriesDropdownModule
  ],
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
