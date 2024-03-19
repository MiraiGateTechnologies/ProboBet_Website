import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { SidebarToggleService } from '../../../service/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'] // Corrected from styleUrl to styleUrls
})
export class SidebarComponent implements OnInit, OnDestroy {
  isVisible = false;
  userName = "Shafi";
  private  allowClose = true;
  private subscription = new Subscription();
  dropdowns: { [key: string]: boolean } = {
    reports: false,
    accounts: false
  };

  constructor(private sidebarService: SidebarToggleService, private router: Router, private eRef: ElementRef) {}

  ngOnInit(): void {
    this.subscription.add(
      this.sidebarService.sidebarVisible$.subscribe(isVisible => {
        this.isVisible = isVisible;
        if (isVisible) {
          // Temporarily prevent closing right after opening
          this.allowClose = false;
          setTimeout(() => this.allowClose = true, 10);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.eRef.nativeElement.contains(event.target) && this.isVisible && this.allowClose) {
      this.sidebarService.closeSidebar();
    }
  }

  closeSidebar(){
    this.sidebarService.hide(); // Assuming this method exists and sets isVisible to false

  }
  toggleDropdown(event: Event, dropdownKey: string): void {
    event.stopPropagation();
    this.dropdowns[dropdownKey] = !this.dropdowns[dropdownKey];
    Object.keys(this.dropdowns).forEach(key => {
      if (key !== dropdownKey) this.dropdowns[key] = false;
    });
  }

  navigateToDeposit(): void {
    this.router.navigate(['/reports/payment/upi']);
  }

}
