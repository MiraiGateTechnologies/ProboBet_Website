import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProbobetService } from '../../betting/probobet.service';
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
export class SportsComponent implements OnInit,OnDestroy {
  cricketMatch:TeamBet[] = [];
  cricketData:any[]=[];
  footballData:any[]=[];
  upcomingCricketData:any[]=[];
    private cricketBetSubscription!: Subscription;
  constructor(private sportService:SportService,private BetService:ProbobetService){}

  ngOnInit(): void {
   this.cricketBetSubscription = this.BetService.getCricketBet().subscribe({
      next: (res: any) => { // Specify the type of 'res' as 'any'
        console.log(res)
        if (res.gameList.length > 0) {
          const currentTime: Date = new Date(); // Specify the type of 'currentTime' as 'Date'
          const liveCricketMatches: any[] = res.gameList.filter((data: any) => data.type === 'CRICKET' && new Date(data.time) <= currentTime);
          const upcommingCricketMatches: any[] = res.gameList.filter((data: any) => data.type === 'CRICKET' && new Date(data.time) >= currentTime);

          const liveFootBallMatches: any[] = res.gameList.filter((data: any) => data.type === 'FOOTBALL' && new Date(data.time) <= currentTime);
          // If there are live cricket matches, add them to the cricketData array
          if (liveCricketMatches.length > 0) {
            this.cricketData.push(...liveCricketMatches.slice(0, 2));
            this.cricketData.sort((a: any, b: any) => Number(new Date(a.time)) - Number(new Date(b.time)));
          }
          if(upcommingCricketMatches.length>0){
            this.upcomingCricketData.push(...upcommingCricketMatches.slice(0,2));
            this.cricketData.sort((a: any, b: any) => Number(new Date(a.time)) - Number(new Date(b.time)));

          }

          if(liveFootBallMatches.length > 0){
            this.cricketData.push(...liveCricketMatches.slice(0, 2));
            this.footballData.sort((a: any, b: any) => Number(new Date(a.time)) - Number(new Date(b.time)));
          }
        }
      },
      error: (err: any) => { // Specify the type of 'err' as 'any'
        console.error('Error fetching cricket bet:', err);
      }
    });

  }
  ngOnDestroy(): void {
    if (this.cricketBetSubscription) {
      this.cricketBetSubscription.unsubscribe();
    }
  }
}
