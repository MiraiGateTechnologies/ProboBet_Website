import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [GamesComponent,CommonModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent {
 images = ['assets/img2.png','assets/img3.png','assets/img4.png','assets/img2.png','assets/img1.png','assets/img2.png']
}
