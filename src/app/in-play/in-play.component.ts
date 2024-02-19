import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProbobetService } from '../betting/probobet.service';
import { liveCricketMatch, TeamBet } from './inpaly.interface';
// import * as cricketData from '../../assets/JSON/cricket-bet.json';
@Component({
  selector: 'app-in-play',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './in-play.component.html',
  styleUrl: './in-play.component.css',
  providers:[ProbobetService]
})
export class InPlayComponent implements OnInit{
   currentSport = '';
   @Input() sport!: string;

  //  cricketMatch:TeamBet[] = [];
   cricketData:any[]=[];
   footballData:any[]=[];
  constructor(private activatedRoute:ActivatedRoute,private BetService:ProbobetService,private router:Router){

    this.activatedRoute.params.subscribe(data => {
      console.log(data)
      this.sport = data.sport;
    });
  }

  ngOnInit(): void {
    // this.cricketMatch = liveCricketMatch;
    this.BetService.getCricketBet().subscribe({
      next: (res: any) => { // Specify the type of 'res' as 'any'
        if (res.gameList.length > 0) {
          const currentTime: Date = new Date(); // Specify the type of 'currentTime' as 'Date'
          const liveCricketMatches: any[] = res.gameList.filter((data: any) => data.type === 'CRICKET' && new Date(data.time) <= currentTime);
          const liveFootBallMatches: any[] = res.gameList.filter((data: any) => data.type === 'FOOTBALL' && new Date(data.time) <= currentTime);
          // If there are live cricket matches, add them to the cricketData array
          if (liveCricketMatches.length > 0) {
            this.cricketData.push(...liveCricketMatches);
            this.cricketData.sort((a: any, b: any) => Number(new Date(a.time)) - Number(new Date(b.time)));
          }
          if(liveFootBallMatches.length > 0){
            this.footballData.push(...liveFootBallMatches);
            this.footballData.sort((a: any, b: any) => Number(new Date(a.time)) - Number(new Date(b.time)));
          }
        }
      },
      error: (err: any) => { // Specify the type of 'err' as 'any'
        console.error('Error fetching cricket bet:', err);
      }
    });

  }

  inPlayDetails(data:any){
    this.router.navigate([`/sportDetails/${data}`]);
  }

}
