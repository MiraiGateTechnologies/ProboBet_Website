import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { filter } from 'rxjs/operators';
import {BottomFooterComponent} from './footer/bottom-footer/bottom-footer.component'
import { SidebarComponent } from './components/setting/sidebar/sidebar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,BottomFooterComponent,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'probobet-app';
  showHeader:boolean= true;
  showFooter:boolean = true;
  constructor(private router: Router) {
    //
  }
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe({
        next: (event: NavigationEnd) => {
          this.showHeader = !(
            event.urlAfterRedirects.includes('/login') ||
            event.urlAfterRedirects.includes('/register') ||
            event.urlAfterRedirects.includes('/verify') ||
            event.urlAfterRedirects.includes('/reports')
          );
          this.showFooter =!(
            event.urlAfterRedirects.includes('/login') ||
            event.urlAfterRedirects.includes('/register') ||
            event.urlAfterRedirects.includes('/verify')
          );
        },
        error: (error) => {
          console.error('Router events error:', error);
        },
        complete: () => {
          console.log('Router events subscription completed.');
        }
      });
  }

}
