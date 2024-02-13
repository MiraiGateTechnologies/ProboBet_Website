import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InPlayComponent } from '../../in-play/in-play.component';
import { SportService } from '../../service/sport.service';
import { GameShowComponent } from '../game-show/game-show.component';
import { liveCricketMatch, TeamBet } from './sports.interface';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [GameShowComponent,CommonModule,InPlayComponent,],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css',
  providers: [SportService]
})
export class SportsComponent implements OnInit {
  cricketMatch:TeamBet[] = [];
  constructor(private sportService:SportService){}

  ngOnInit(): void {
    // this.sportService.getSport().subscribe({
    //   next:(res)=>{
    //     console.log(res)
    //   }
    // })
    const data = liveCricketMatch;
    this.cricketMatch = data.slice(0,2);
  }
}
