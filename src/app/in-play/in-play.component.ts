import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProbobetService } from '../betting/probobet.service';
import { liveCricketMatch, TeamBet } from './inpaly.interface';
import * as cricketData from '../../assets/JSON/cricket-bet.json';
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
   cricketMatch:TeamBet[] = [];

  constructor(private activatedRoute:ActivatedRoute,private BetService:ProbobetService,private router:Router){
    this.activatedRoute.queryParams.subscribe(params => {
      this.currentSport = params['sport'];
    });
  }

  ngOnInit(): void {
    this.cricketMatch = liveCricketMatch;
  // console.log(cricketData)
    // this.BetService.getCricketBet().subscribe({
    //   next:(res)=>{
    //     console.log(res)
    //   },
    //   error:(error)=>{
    //       console.error('There was an error!', error);
    //     }
    // })
  }
  inPlayDetails(data:any){
    this.router.navigate([`/sportDetails/${data._id}`])
    console.log(data)
  }
}
