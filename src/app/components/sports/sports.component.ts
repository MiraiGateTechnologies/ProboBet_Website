import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProbobetService } from '../../betting/probobet.service';
import { InPlayComponent } from '../../in-play/in-play.component';
import { SportService } from '../../service/sport.service';
import { GameShowComponent } from '../game-show/game-show.component';
import { LoadingComponent } from '../loading/loading.component';
import { liveCricketMatch, TeamBet } from './sports.interface';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [GameShowComponent,CommonModule,InPlayComponent,LoadingComponent],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css',
  providers: [SportService]
})
export class SportsComponent implements OnInit,OnDestroy {
  cricketMatch:TeamBet[] = [];
  cricketData:any[]=[];
  cricketDatas:any[]=[{matchcode:123,title:'Chenni super King Vs Australia playing X11',mbet:1,sbet:1},{matchcode:123,title:'South Africa Vs Srilanka',mbet:1,sbet:1}];
  isLoading:boolean =false;
  footballData:any[]=[];
  upcomingCricketData:any[]=[];
    private cricketBetSubscription!: Subscription;
  constructor(private sportService:SportService,private BetService:ProbobetService,private router:Router){}

  ngOnInit(): void {
    this.isLoading =true;
   this.cricketBetSubscription = this.BetService.getCricketBet().subscribe({
      next: (res: any) => { // Specify the type of 'res' as 'any'
        console.log(res)

        if (res.gameList.length > 0) {
          this.isLoading =false;
          // const matchcode = res.gameList.match_code;
          // this.sportService.getSportDetails(matchcode).subscribe({
          //  next:(res)=>{
          //     console.log(res)
          //   }
          // })
          const currentTime: Date = new Date(); // Specify the type of 'currentTime' as 'Date'
          const fiveMinutesLater = new Date(currentTime.getTime() + 5 * 60000);

          const liveCricketMatches: any[] = res.gameList.filter((data: any) => {

            const matchTime = new Date(data.time);
            return data.type === 'CRICKET' && matchTime <= currentTime && matchTime <= fiveMinutesLater;
          });
          const upcommingCricketMatches: any[] = res.gameList.filter((data: any) => data.type === 'CRICKET' && new Date(data.time) >= currentTime);
          const liveFootBallMatches: any[] = res.gameList.filter((data: any) => data.type === 'FOOTBALL' && new Date(data.time) <= currentTime);
          if (liveCricketMatches.length > 0) {
            this.cricketData.push(...liveCricketMatches.slice(0, 2));
            this.cricketData.sort((a: any, b: any) => Number(new Date(a.time)) - Number(new Date(b.time)));
          }
          if(upcommingCricketMatches.length>0){
            this.upcomingCricketData.push(...upcommingCricketMatches.slice(0,2));
            this.upcomingCricketData.sort((a: any, b: any) => Number(new Date(a.time)) - Number(new Date(b.time)));

          }

          if(liveFootBallMatches.length > 0){
            this.cricketData.push(...liveCricketMatches.slice(0, 2));
            this.footballData.sort((a: any, b: any) => Number(new Date(a.time)) - Number(new Date(b.time)));
          }
        }
      },
      error: (err: any) => { // Specify the type of 'err' as 'any'
        console.error('Error fetching cricket bet:', err);
        this.isLoading =false
      }
    });

  }
  ngOnDestroy(): void {
    if (this.cricketBetSubscription) {
      this.cricketBetSubscription.unsubscribe();
    }
  }

  truncateTitle(title: string): string {
    if (title.length > 25) {
      return title.substring(0, 25) + '...';
    } else {
      return title;
    }
  }
  inPlayDetails(data:any){
    this.router.navigate([`/sportDetails/${data}`]);
  }
}
