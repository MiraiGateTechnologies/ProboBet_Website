import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { TokenInterceptor } from '../../interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataFetchingInteceptor } from '../../interceptors/Datafetching.interceptor';
import { RegisterComponent } from '../../register/register.component';
import { strongPasswordValidator } from '../../interface/validation';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[AuthService]
})
export class LoginComponent {
  loginForm!: FormGroup;
  StrongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
  showPassword = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  model = {
    code: '',
    password: ''
  };
  constructor(private authservice:AuthService,private formBuilder:FormBuilder){
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      code: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],


    });
  }
  get formControls() {
  return this.loginForm.controls;
}

  onSubmit() {
    if (this.model.code && this.model.password) {
      this.authservice.login(this.model.code,this.model.password).subscribe({
        next:(res)=>{},
        error:(e)=>{}
      })
      // You can add your validation logic here
      console.log('Form submitted with code:', this.model.code);
      console.log('Form submitted with password:', this.model.password);

      // Add your authentication logic here

      // After successful authentication, you can navigate to another page
    }
  }
}
