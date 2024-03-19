import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';
import { SportsComponent } from '../sports/sports.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, FooterComponent, SportsComponent],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  gameData:any[]=[
        { navigateToSport:'cricket', image:'assets/group-b/f.png', imageName:'Cricket' },
        { navigateToSport:'football', image:'assets/group-b/b.png', imageName:'Football'},
        { navigateToSport:'tennis', image:'assets/group-b/j.png', imageName:'Tennis'},
        { navigateToSport:'basketball', image:'assets/group-b/h.png', imageName:'Basketball'},
        { navigateToSport:'boxing', image:'assets/group-b/d.png', imageName:'Boxing'},
        { navigateToSport:'wrestling', image:'assets/group-b/e.png', imageName:'Wrestling'},
        { navigateToSport:'riding', image:'assets/group-b/g.png', imageName:'Riding'},
        { navigateToSport:'table', image:'assets/group-b/c.png', imageName:'Table'},
      ];
  activeSport: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  navigateToSport(sport: string) {
    this.activeSport = sport;
    this.router.navigate(['/' + sport]);
  }

  isActive(sport: string): boolean {
    return this.activeSport == sport
  }

  isCurrentRouteCricket(): boolean {
    return this.router.url.endsWith('/cricket');
  }
  back(){
    window.history.back()
  }

  getCurrentRouteParams() {
    const currentRoute = this.activatedRoute.snapshot;
    // Access current route's parameters
    const sport = currentRoute.params['sport'];
    console.log('Current Sport:', sport);
    // Access current route's query parameters
    const queryParams = currentRoute.queryParams;
    console.log('Query Parameters:', queryParams);
  }

}
