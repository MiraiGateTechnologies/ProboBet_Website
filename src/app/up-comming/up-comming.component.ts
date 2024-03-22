import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { upcommingCricketTeam, TeamBet } from './upcomming.interface';
import { ProbobetService } from '../betting/probobet.service';
import { LoadingComponent } from '../components/loading/loading.component';

@Component({
  selector: 'app-up-comming',
  standalone: true,
  imports: [CommonModule,LoadingComponent],
  templateUrl: './up-comming.component.html',
  styleUrl: './up-comming.component.css'
})
export class UpCommingComponent  implements OnInit{
  @Input() sport!: string;
  isLoading:boolean =false;
  cricketUpcommingData:any[]=[]
  footBallUpcommingData:any[]=[]
 constructor(private activatedRoute:ActivatedRoute,private BetService:ProbobetService,private router:Router){

   console.log(this.activatedRoute.snapshot.paramMap.get('cricket'))
   this.activatedRoute.url.subscribe(data => {
   this.sport = data.map(data => data.path).join('/');
   });
}

 ngOnInit(): void {
   this.isLoading=true;
  this.BetService.getCricketBet().subscribe({
    next: (res: any) => { // Specify the type of 'res' as 'any'
      if (res.gameList.length > 0) {
        this.isLoading = false;
        const currentTime: Date = new Date(); // Specify the type of 'currentTime' as 'Date'
        const upcommingCricketMatches: any[] = res.gameList.filter((data: any) => data.type === 'CRICKET' && new Date(data.time) >= currentTime);
        const upcommingFootBallMatches: any[] = res.gameList.filter((data: any) => data.type === 'FOOTBALL' && new Date(data.time) >= currentTime);
        if (upcommingCricketMatches.length > 0) {
          this.isLoading =false;
          this.cricketUpcommingData.push(...upcommingCricketMatches);
          this.cricketUpcommingData.sort((a: any, b: any) => Number(new Date(a.time)) - Number(new Date(b.time)));
        }
        if(upcommingFootBallMatches.length > 0){
          this.isLoading = false
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
