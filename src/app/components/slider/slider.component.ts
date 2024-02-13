import { Component } from '@angular/core';
import { PopularComponent } from '../popular/popular.component';
import { GamesComponent } from '../games/games.component';
import { SportsComponent } from '../sports/sports.component';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [PopularComponent,GamesComponent,SportsComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  

}
