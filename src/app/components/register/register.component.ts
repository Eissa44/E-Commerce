import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import {
  FormBuilder,
  FormControlOptions,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(
    private _AuthenticationService: AuthenticationService,
    private _FormBuilder: FormBuilder,
    private _Router: Router
  ) {}

  errMessage: string = '';
  isloading: boolean = false;

  registerForm: FormGroup = this._FormBuilder.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],

      email: ['', [Validators.required, Validators.email]],

      password: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)],
      ],

      rePassword: [''],

      phone: [
        '',
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
      ],
    },
    { validators: [this.confirmPass] } as FormControlOptions
  );

  confirmPass(group: FormGroup): void {
    const password = group.get('password');
    const rePassword = group.get('rePassword');

    if (rePassword?.value === '') {
      rePassword?.setErrors({ required: true });
    } else if (password?.value !== rePassword?.value) {
      rePassword?.setErrors({ mismatch: true });
    }
  }

  handelForm(): void {
    const userData = this.registerForm.value;
    this.isloading = true;

    if (this.registerForm.valid === true) {
      this._AuthenticationService.userRigister(userData).subscribe({
        next: (response) => {
          if (response.message === 'success') {
            this._Router.navigate(['/login']);
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
