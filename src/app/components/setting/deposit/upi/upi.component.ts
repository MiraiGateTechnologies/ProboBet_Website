import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {nonNegativeAmountValidator, numericLengthValidator} from "../../../../interface/numberLengthValidation";
@Component({
  selector: 'app-upi',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './upi.component.html',
  styleUrl: './upi.component.css'
})
export class UpiComponent {
  @ViewChild('copyIcon') copyIcon!: ElementRef;
  option1!:FormGroup;
  option2!:FormGroup;

  isClicked500 =false;
  isClicked1000=false;
  isClicked2000=false;
  isClicked5000=false;
  isClicked10000=false;
  isClicked20000=false;
  isClicked50000=false;
  isClicked250000 = false;
  isClicked25000=false;
  submitted1= false;
  submitted2= false;

  isClicked100000=false;
  currentRoute: string = '';
  amountDepositOption1: any = 0;
  constructor(private activatedRoute: ActivatedRoute,private renderer: Renderer2,private fb:FormBuilder,private router: Router) {}
  ngOnInit() {
    this.activatedRoute.url.subscribe(urlSegments => {
      this.currentRoute = urlSegments.length > 0 ? urlSegments[0].path : 'no path';
      console.log(this.currentRoute)
    });

    this.option1 = this.fb.group({
      uploadDepositFileOption1:[''],
      amountDepositOption1:['',[Validators.required,nonNegativeAmountValidator()]],
      uniqueTransactionOption1: ['', [Validators.required,numericLengthValidator(6,16),nonNegativeAmountValidator()]],
    });
    this.option2 = this.fb.group({
      uploadDepositFileOption2:[''],
      amountDepositOption2:['',Validators.required],
      uniqueTransactionOption2: ['', [Validators.required,numericLengthValidator(6,16)]],
    })
  }

  onSubmit(option:number): void {
    if(option === 1 ){
      this.submitted1 = true;
      if (this.option1.valid) {
        const formData = new FormData();
        formData.append('uploadDepositFileOption1', this.option1.get('uploadDepositFileOption1')?.value);
        formData.append('amountDepositOption1',this.option1.get('amountDepositOption1')?.value);
        formData.append('uniqueTransactionOption1',this.option1.get('uniqueTransactionOption1')?.value);
        console.log(formData);
      }
    }
    if(option === 2 ){
      this.submitted2 = true;
      if(this.option2.valid) {
        const formData = new FormData();
        formData.append('uploadDepositFileOption2', this.option2.get('uploadDepositFileOption2')?.value);
        formData.append('amountDepositOption2',this.option2.get('amountDepositOption2')?.value);
        formData.append('uniqueTransactionOption2',this.option2.get('uniqueTransactionOption2')?.value);
        console.log(formData)
      }
    }
  }

  onImagePickedOption1(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
        this.option1.patchValue({ uploadDepositFileOption1: fileInput.files[0] });
    }
  }
  onImagePickedOption2(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
        this.option2.patchValue({ uploadDepositFileOption2: fileInput.files[0] });
    }
  }
  setAmount(amount: number, option: number){
    this.resetClickedFlags()
    if (option === 1) {
      if(amount==500){
        this.isClicked500 = true;
        this.option1.patchValue({ amountDepositOption1: amount });
      }else if (amount == 1000) {
        this.isClicked1000 = true;
        this.option1.patchValue({ amountDepositOption1: amount });
      }else if (amount == 2000) {
        this.isClicked2000 = true;
        this.option1.patchValue({ amountDepositOption1: amount });
      }else if (amount === 5000) {
        this.isClicked5000 = true;
        this.option1.patchValue({ amountDepositOption1: amount });
      }else if (amount === 10000) {
        this.isClicked10000 = true;
        this.option1.patchValue({ amountDepositOption1: amount });
      }else if (amount === 20000) {
        this.isClicked20000 = true;
        this.option1.patchValue({ amountDepositOption1: amount });
      }else if(amount == 25000){
        this.isClicked25000 =true;
        this.option1.patchValue({ amountDepositOption1: amount });
      }else if(amount == 250000){
        this.isClicked250000 =true;
        this.option1.patchValue({ amountDepositOption1: amount });
      }else if(amount == 50000){
        this.isClicked50000 = true;
        this.option1.patchValue({ amountDepositOption1: amount });
      }else if(amount == 100000){
        this.isClicked100000 = true;
        this.option1.patchValue({ amountDepositOption1: amount });
      }

    } else if (option === 2) {
      if(amount==500){
        this.isClicked500 = true;
        this.option2.patchValue({ amountDepositOption2: amount });
      }else if (amount == 1000) {
        this.isClicked1000 = true;
        this.option2.patchValue({ amountDepositOption2: amount });
      }else if (amount == 2000) {
        this.isClicked2000 = true;
        this.option2.patchValue({ amountDepositOption2: amount });
      }else if (amount === 5000) {
        this.isClicked5000 = true;
        this.option2.patchValue({ amountDepositOption2: amount });
      }else if (amount === 10000) {
        this.isClicked10000 = true;
        this.option2.patchValue({ amountDepositOption2: amount });
      }else if (amount === 20000) {
        this.isClicked20000 = true;
        this.option2.patchValue({ amountDepositOption2: amount });
      } else if(amount == 25000){
        this.isClicked25000 =true;
        this.option2.patchValue({ amountDepositOption2: amount });
      }else if(amount == 250000){
        this.isClicked250000 =true;
        this.option2.patchValue({ amountDepositOption2: amount });
      }else if(amount == 100000){
        this.isClicked100000 = true;
        this.option2.patchValue({ amountDepositOption2: amount });
      }else if(amount == 50000){
        this.isClicked50000 = true;
        this.option1.patchValue({ amountDepositOption1: amount });
      }

    }

  }
  resetClickedFlags() {
    this.isClicked500 =false;
    this.isClicked1000=false;
    this.isClicked2000=false;
    this.isClicked5000=false;
    this.isClicked10000=false;
    this.isClicked20000=false;
    this.isClicked50000=false;
    this.isClicked25000=false;
    this.isClicked100000=false;
  }
  copyText(content: HTMLElement) {
    const textToCopy = content.innerText.trim();
    const textArea = document.createElement('textarea');
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.opacity = '0';
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }

}
