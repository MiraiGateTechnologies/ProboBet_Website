import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { upcommingCricketTeam, TeamBet } from './upcomming.interface';

@Component({
  selector: 'app-up-comming',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './up-comming.component.html',
  styleUrl: './up-comming.component.css'
})
export class UpCommingComponent  implements OnInit{
  currentSport = '';
  cricketMatch:TeamBet[]=[];
 constructor(private activatedRoute:ActivatedRoute){
   this.activatedRoute.queryParams.subscribe(params => {
     this.currentSport = params['sport'];
   });
 }

 ngOnInit(): void {
  this.cricketMatch = upcommingCricketTeam;

     console.log(this.currentSport)
 }
}
