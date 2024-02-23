import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SliderComponent } from '../components/slider/slider.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SliderComponent,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  sidebarOpen = false;
  dropdowns: { [key: string]: boolean } = {
    reports: false,
    accounts: false
  };


  constructor(private eRef: ElementRef) {}

  openSidebar() {
    this.sidebarOpen = true;
  }
  toggleDropdown(event: Event, dropdownKey: string): void {
    event.stopPropagation();
    if (this.dropdowns[dropdownKey]) {
      this.dropdowns[dropdownKey] = false;
    } else {
      Object.keys(this.dropdowns).forEach(key => {
        this.dropdowns[key] = false;
      });
      this.dropdowns[dropdownKey] = true;
    }
  }




  closeSidebar() {
    this.sidebarOpen = false;
  }

  @HostListener('document:click', ['$event'])
  clickout(event:any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.closeSidebar();
    }
  }
}
