import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private _AuthenticationService: AuthenticationService,
    private _FormBuilder: FormBuilder,
    private _Router: Router
  ) {}

  errMessage: string = '';
  isloading: boolean = false;

  loginForm: FormGroup = this._FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],

    password: [
      '',
      [Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)],
    ],
  });

  handelForm(): void {
    const userData = this.loginForm.value;
    this.isloading = true;

    if (this.loginForm.valid === true) {
      this._AuthenticationService.userLogin(userData).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            localStorage.setItem('loginToken', response.token);
            this._AuthenticationService.decodeInfo();
            this._Router.navigate(['/home']);
            this.isloading = false;
          }
        },
        error: (err) => {
          this.errMessage = err.error.message;
          this.isloading = false;
        },
      });
    }
  }
}
