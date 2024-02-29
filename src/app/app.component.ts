import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'probobet-app';
  showHeader:boolean= true
  constructor(private router: Router) {
    // Subscribe to router events
    this.router.events.pipe(
      // Filter for the NavigationEnd event
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Set showHeader based on the current URL
      this.showHeader = !(event.urlAfterRedirects.includes('/login') || event.urlAfterRedirects.includes('/register')|| event.urlAfterRedirects.includes('/verify'));
      // this.showHeader = !event.urlAfterRedirects.includes('/register');

    });
  }
  ngOnInit(): void {
  }
}
