import { Component, ElementRef, HostListener, OnInit,EventEmitter,Output, ChangeDetectorRef } from '@angular/core';

import { CommonModule } from '@angular/common';
import {  Router, RouterModule } from '@angular/router';
import { HeaderService } from '../service/header.service';
import { SidebarToggleService } from '../service/sidebar.service';
import { SidebarComponent } from '../components/setting/sidebar/sidebar.component';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [CommonModule,RouterModule,SidebarComponent],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css'
})
export class TopHeaderComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  sidebarOpen = false;
  userName!:string;
  coin!:number;
  userCode!:string;
  dropdowns: { [key: string]: boolean } = {
    reports: false,
    accounts: false
  };


  constructor(private eRef: ElementRef,private router:Router,private userService:HeaderService, private sidebarService: SidebarToggleService, private cdr: ChangeDetectorRef,private autService:AuthService) {}

  openSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit(): void {
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
  toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
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
  }



  closeSidebar() {
    this.sidebarOpen = false;
  }
}
