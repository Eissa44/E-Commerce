import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordauthService } from 'src/app/core/services/passwordauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpass',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.scss'],
})
export class ForgotpassComponent {
  constructor(
    private _PasswordauthService: PasswordauthService,
    private _Router: Router
  ) {}

  stepOne: boolean = true;
  stepTwo: boolean = false;
  stepThree: boolean = false;
  email: string = '';
  errorMsg: string = '';

  forgotForm: FormGroup = new FormGroup({
    email: new FormControl(''),
  });

  resetCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(''),
  });

  resetPasswordForm: FormGroup = new FormGroup({
    newPassword: new FormControl(''),
  });

  forgotPass(): void {
    let userEmail = this.forgotForm.value;
    this.email = userEmail.email;

    this._PasswordauthService.forgotPassword(userEmail).subscribe({
      next: (response) => {
        console.log(response);
        this.errorMsg = response.message;
        this.stepOne = false;
        this.stepTwo = true;
      },
      error: (err) => {
        this.errorMsg = err.error.message;
      },
    });
  }

  reserCode(): void {
    let userCode = this.resetCodeForm.value;
    this._PasswordauthService.resetCode(userCode).subscribe({
      next: (response) => {
        console.log(response);
        this.errorMsg = response.status;
        this.stepTwo = false;
        this.stepThree = true;
      },
      error: (err) => {
        this.errorMsg = err.error.message;
      },
    });
  }

  resetPassword(): void {
    let resetForm = this.resetPasswordForm.value;
    resetForm.email = this.email;

    this._PasswordauthService.resetPassword(resetForm).subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
}
