import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upi',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './upi.component.html',
  styleUrl: './upi.component.css'
})
export class UpiComponent {
  @ViewChild('copyIcon') copyIcon!: ElementRef;
  paymentOption!:FormGroup;
  isClicked500 =false;
  isClicked1000=false;
  isClicked2000=false;
  isClicked5000=false;
  isClicked10000=false;
  isClicked20000=false;
  isClicked50000=false;
  isClicked250000 = false;
  isClicked25000=false;
  submitted= false;
  isClicked100000=false;
  currentRoute: string = '';
  amount: any = 0;
  constructor(private activatedRoute: ActivatedRoute,private renderer: Renderer2,private fb:FormBuilder) {}
  ngOnInit() {
    this.activatedRoute.url.subscribe(urlSegments => {
      this.currentRoute = urlSegments.length > 0 ? urlSegments[0].path : 'no path';
      console.log(this.currentRoute)
    });
    this.paymentOption = this.fb.group({
      uploadDepositFile:[''],
      amountDeposit:['',Validators.required],
      uniqueTransaction:[null,[Validators.required,Validators.min(6),Validators.max(16)]]
    })
  }
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0]; // Here we use only the first file (single file)
    this.paymentOption.patchValue({ uploadDepositFile: file});
  }
  setAmount(amount:number){
    this.isClicked500 =false;
    this.isClicked1000=false;
    this.isClicked2000=false;
    this.isClicked5000=false;
    this.isClicked10000=false;
    this.isClicked20000=false;
    this.isClicked50000=false;
    this.isClicked25000=false;
    this.isClicked100000=false;
    this.amount = amount;
    if (amount === 500) {
      this.isClicked500 = true;
    } else if (amount == 1000) {
      this.isClicked1000 = true;
    } else if (amount === 2000) {
      this.isClicked2000 = true;
    } else if (amount === 5000) {
      this.isClicked5000 = true;
    } else if (amount === 10000) {
      this.isClicked10000 = true;
    } else if (amount === 20000) {
      this.isClicked20000 = true;
    }else if(amount == 25000){
      this.isClicked25000 =true;
    }else if(amount == 250000){
      this.isClicked250000 =true;
    }else if(amount == 100000){
      this.isClicked100000 = true;
}


  }
  onSubmit(): void {
    this.submitted = true;
    if(!this.paymentOption.valid) {
      return;
    }else{
      console.log(this.paymentOption.value)
    }

  }
copyText(text: string) {
  // Create a temporary textarea element
  const textarea = this.renderer.createElement('textarea');
  textarea.value = text;
  this.renderer.appendChild(document.body, textarea);
  textarea.select();
  document.execCommand('copy');
  this.renderer.removeChild(document.body, textarea);
}

}
