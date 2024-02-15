import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { upcommingCricketTeam, TeamBet } from './upcomming.interface';
import { ProbobetService } from '../betting/probobet.service';

@Component({
  selector: 'app-up-comming',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './up-comming.component.html',
  styleUrl: './up-comming.component.css'
})
export class UpCommingComponent  implements OnInit{
  currentSport = '';
  // cricketMatch:TeamBet[]=[];
  cricketUpcommingData:any[]=[]
  footBallUpcommingData:any[]=[]
 constructor(private activatedRoute:ActivatedRoute,private BetService:ProbobetService){
   this.activatedRoute.queryParams.subscribe(params => {
     this.currentSport = params['sport'];
   });
 }

 ngOnInit(): void {
  this.BetService.getCricketBet().subscribe({
    next: (res: any) => { // Specify the type of 'res' as 'any'
      if (res.gameList.length > 0) {
        const currentTime: Date = new Date(); // Specify the type of 'currentTime' as 'Date'
        const upcommingCricketMatches: any[] = res.gameList.filter((data: any) => data.type === 'CRICKET' && new Date(data.time) >= currentTime);
        const upcommingFootBallMatches: any[] = res.gameList.filter((data: any) => data.type === 'FOOTBALL' && new Date(data.time) >= currentTime);
        // If there are live cricket matches, add them to the cricketData array
        if (upcommingCricketMatches.length > 0) {
          this.cricketUpcommingData.push(...upcommingCricketMatches);
          this.cricketUpcommingData.sort((a: any, b: any) => Number(new Date(a.time)) - Number(new Date(b.time)));
        }
        if(upcommingFootBallMatches.length > 0){
          this.footBallUpcommingData.push(...upcommingFootBallMatches);
          this.footBallUpcommingData.sort((a: any, b: any) => Number(new Date(a.time)) - Number(new Date(b.time)));
        }
      }
    },
    error: (err: any) => { // Specify the type of 'err' as 'any'
      console.error('Error fetching cricket bet:', err);
    }
  });
 }
}
