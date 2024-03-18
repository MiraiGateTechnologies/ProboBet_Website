import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MultiComponent } from '../multi/multi.component';

@Component({
  selector: 'app-game-show',
  standalone: true,
  imports: [MultiComponent,CommonModule],
  templateUrl: './game-show.component.html',
  styleUrl: './game-show.component.css'
})
export class GameShowComponent {
  gameShowImage:any[]=['assets/game-show/game1.png','assets/game-show/game2.png','assets/game-show/game3.png','assets/game-show/game4.png','assets/game-show/game5.png','assets/game-show/game6.png','assets/game-show/game7.png','assets/game-show/game8.png','assets/game-show/game9.png','assets/game-show/game10.png','assets/game-show/game11.png','assets/game-show/game12.png']
}
