import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../service/auth.service';
import { TokenInterceptor } from '../../interceptors/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataFetchingInteceptor } from '../../interceptors/Datafetching.interceptor';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[AuthService,
    // {
    // provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true
    // },
    // {
    // provide:HTTP_INTERCEPTORS,useClass:DataFetchingInteceptor,multi:true
    // }
  ]
})
export class LoginComponent {
  model = {
    code: '',
    password: ''
  };
  constructor(private authservice:AuthService){

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
