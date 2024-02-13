import { Component } from '@angular/core';
import { InPlayComponent } from '../in-play/in-play.component';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesComponent } from '../components/games/games.component';
import { UpCommingComponent } from '../up-comming/up-comming.component';
import { ResultComponent } from '../result/result.component';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-cricket',
  standalone: true,
  imports: [GamesComponent,InPlayComponent,UpCommingComponent,ResultComponent,MatTabsModule],
  templateUrl: './cricket.component.html',
  styleUrl: './cricket.component.css'
})
export class CricketComponent {
constructor(private router:Router){

}
// abc(){
//   this.router.navigate(['/inplay'],{queryParams:{order:'cricket'}})
// }
}
