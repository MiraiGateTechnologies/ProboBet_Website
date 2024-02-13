import { Component } from '@angular/core';
import { MultiComponent } from '../multi/multi.component';

@Component({
  selector: 'app-game-show',
  standalone: true,
  imports: [MultiComponent],
  templateUrl: './game-show.component.html',
  styleUrl: './game-show.component.css'
})
export class GameShowComponent {

}
