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
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
  constructor(private authservice:AuthService,private formBuilder:FormBuilder,private toastr:ToastrService,private router:Router){
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

    if (this.loginForm.valid) {
       let data = this.loginForm.value
      this.authservice.login(data).subscribe({
        next:(res)=>{
          if(res.isSuccess == false){
            this.toastr.error(res.message,'Username Not exists',{
              timeOut:3000
            });
          }
          if(res.isSuccess == true){
            this.toastr.success(`Login ${res.message}`);
            this.router.navigate(['/'])
          }

        },
        error:(e)=>{
          console.log(e)
          this.toastr.error('Issue in Loin',e.message,{
            timeOut:300
          });
        }
      })
      // You can add your validation logic here
      console.log('Form submitted with code:', this.model.code);
      console.log('Form submitted with password:', this.model.password);

      // Add your authentication logic here

      // After successful authentication, you can navigate to another page
    }
  }
}
