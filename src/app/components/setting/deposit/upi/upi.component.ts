import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upi.component.html',
  styleUrl: './upi.component.css'
})
export class UpiComponent {
  currentRoute: string = '';

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.url.subscribe(urlSegments => {
      this.currentRoute = urlSegments.length > 0 ? urlSegments[0].path : 'no path';
      console.log(this.currentRoute)
    });
  }
}
