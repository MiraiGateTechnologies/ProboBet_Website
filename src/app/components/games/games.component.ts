import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { SportsComponent } from '../sports/sports.component';
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule,FooterComponent, SportsComponent],
  providers: [
    // provideRouter(routes)
  ],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
constructor(private router:Router){

}

navigateToSport(sport: string) {
  this.router.navigate(['/' + sport], { queryParams: { sport: sport } });
}

isActive(sport: string): boolean {
  return this.router.url.includes(sport);
}

}
