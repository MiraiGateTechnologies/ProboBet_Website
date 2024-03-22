import { CommonModule } from '@angular/common';
import { Component, OnInit,ElementRef,HostListener} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { ChangePasswordService } from '../../../service/change-password.service';
export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const hasNumber = /[0-9]/.test(value);
    const hasAlpha = /[a-zA-Z]/.test(value);
    const isLengthValid = value.length >= 8;
    const passwordValid = hasNumber && hasAlpha && isLengthValid;
    return !passwordValid ? { 'passwordStrength': true } : null;
  };
}

@Component({
  selector: 'app-changepassword',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css'
})

export class ChangepasswordComponent implements OnInit{
  showPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;
  changePasswordForm!: FormGroup;
  private lastScrollTop = 0;

  // @HostListener('window:scroll', [])


  constructor(private formBuilder:FormBuilder,private elRef: ElementRef,private changePasswordService:ChangePasswordService){}
  onScroll(event: Event) {
    const videoContainer = this.elRef.nativeElement.querySelector('#videoContainer');
    const videoPlayer = this.elRef.nativeElement.querySelector('#myVideo');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      // Scrolling down
      videoPlayer.currentTime += 0.1; // Increase this value to adjust the scroll speed
    } else {
      // Scrolling up
      videoPlayer.currentTime -= 0.1; // Increase this value to adjust the scroll speed
    }

    this.lastScrollTop = scrollTop;
  }

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, passwordStrengthValidator()]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['newPassword'].value === frm.controls['confirmPassword'].value ? null : { 'mismatch': true };
  }

  onWindowScroll() {
    const video = document.getElementById('myVideo') as HTMLVideoElement;
    const videoTop = video.getBoundingClientRect().top;
    const videoBottom = video.getBoundingClientRect().bottom;

    // Check if the video is in the viewport
    if (videoTop < window.innerHeight && videoBottom >= 0) {
      video.play();
    } else {
      video.pause();
    }
  }
  toggleCurrentPasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  toggleNewPasswordVisibility(): void {
    this.showNewPassword = !this.showNewPassword;
  }
  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      // Handle form submission
      console.log(this.changePasswordForm.value);

      // this.changePasswordService.changePassword()
    } else {
      // Trigger validation for all form fields
      Object.keys(this.changePasswordForm.controls).forEach(field => {
        const control = this.changePasswordForm.get(field);
        // control.markAsTouched({ onlySelf: true });
      });
    }
  }

  getErrorMessage(field: string): string {
    const control = this.changePasswordForm.get(field);
    if (control && control.touched) {
      if (control.hasError('required')) {
        return 'This field is required.';
      }
      if (field === 'newPassword' && control.hasError('passwordStrength')) {
        return 'Password must be at least 8 characters long';
      }
      // The 'mismatch' error is set on the form group, so you should check for it at the form level, not at the field level
      if (this.changePasswordForm.hasError('mismatch') && (field === 'newPassword' || field === 'confirmPassword')) {
        return 'Passwords do not match.';
      }
    }
    return '';
  }
  goBack(){
    window.history.back()
  }

}
