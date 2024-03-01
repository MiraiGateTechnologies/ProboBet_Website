import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upi',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './upi.component.html',
  styleUrl: './upi.component.css'
})
export class UpiComponent {
  currentRoute: string = '';
  amount: any = 0;
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.url.subscribe(urlSegments => {
      this.currentRoute = urlSegments.length > 0 ? urlSegments[0].path : 'no path';
      console.log(this.currentRoute)
    });
  }
  setAmount(amount:number){
    this.amount = amount
  }
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const label = input.nextElementSibling as HTMLLabelElement;
    if (input.files && input.files[0]) {
        label.textContent = input.files[0].name;
    } else {
        label.textContent = 'Choose file';
    }
}

}
