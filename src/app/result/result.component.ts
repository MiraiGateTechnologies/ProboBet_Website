import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit{
  currentSport = '';

 constructor(private activatedRoute:ActivatedRoute){
   this.activatedRoute.queryParams.subscribe(params => {
     this.currentSport = params['sport'];
   });
 }
 // isActive(sport: string): boolean {

 //   return this.currentSport === sport;
 // }
 ngOnInit(): void {
     console.log(this.currentSport)
 }
}

