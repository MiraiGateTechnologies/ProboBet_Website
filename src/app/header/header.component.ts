import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit,EventEmitter,Output, ChangeDetectorRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SliderComponent } from '../components/slider/slider.component';
import {  Router, RouterLink, RouterModule } from '@angular/router';
import { HeaderService } from '../service/header.service';
import { SidebarToggleService } from '../service/sidebar.service';
import { SidebarComponent } from '../components/setting/sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SliderComponent,CommonModule,RouterModule,SliderComponent,SidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit{
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  sidebarOpen = false;
  userName!:string;
  coin!:number;
  userCode!:string;
  dropdowns: { [key: string]: boolean } = {
    reports: false,
    accounts: false
  };


  constructor(private eRef: ElementRef,private router:Router,private userService:HeaderService, private sidebarToggleService: SidebarToggleService, private cdr: ChangeDetectorRef) {}

  openSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit(): void {
    this.sidebarToggleService.sidebarStatus$.subscribe((status: boolean) => {
      this.sidebarOpen = status;
      this.cdr.detectChanges();
    });
    this.userService.getDataOfUser().subscribe({
      next:(res)=>{
        this.userName = res.name;
        this.coin =  res.coin;
        this.userCode = res.code;
        console.log(res);
      },
      error:(e)=>{
        console.log(e);
      }
    })

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
  navigateToDeposit(){
    this.router.navigate(['/reports/payment/upi'])
    // reports/payment/upi
  }


  closeSidebar() {
    this.sidebarOpen = false;
  }

  @HostListener('document:click', ['$event'])
  clickout(event:any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.closeSidebar();
    }
    if (!event.target.classList.contains('bottom-footer')) {
      this.closeSidebar();
    }
  }
}
