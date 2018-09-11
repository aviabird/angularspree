
import {tap} from 'rxjs/operators';
import { AuthService } from './../../../core/services/auth.service';
import { AuthActions } from './../../actions/auth.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  updatePasswordForm: FormGroup;
  updatePasswordSubs: Subscription;

  token: string;
  email: string;
  id: string;
  passwordReset = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private actions: AuthActions,
    private authService: AuthService) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.token = params['reset_password_token'];
      this.id = params['id'];
    });
    this.initForm();
  }

  onSubmit() {
    const values = this.updatePasswordForm.value;
    const keys = Object.keys(values);

    if (this.updatePasswordForm.valid) {
      this.updatePasswordSubs = this.authService
        .updatePassword(values).pipe(
        tap(_ => this.passwordReset = true, (user) => {
          const errors = user.error.error || 'Something went wrong';
          keys.forEach(val => {
            this.pushErrorFor(val, errors);
          });
        })).subscribe();
    } else {
      keys.forEach(val => {
        const ctrl = this.updatePasswordForm.controls[val];
        if (!ctrl.valid) {
          this.pushErrorFor(val, null);
          ctrl.markAsTouched();
        };
      });
    }
  }

  private pushErrorFor(ctrl_name: string, msg: string) {
    this.updatePasswordForm.controls[ctrl_name].setErrors({ 'msg': msg });
  }

  initForm() {
    const password = '';
    const password_confirmation = '';

    this.updatePasswordForm = this.fb.group({
      'password': [password, Validators.compose([Validators.required, Validators.minLength(6)])],
      'password_confirmation': [password_confirmation, Validators.compose([Validators.required, Validators.minLength(6)])],
      'email': this.email,
      'reset_password_token': this.token,
      'id': this.id,
    }, { validator: this.matchingPasswords('password', 'password_confirmation') });
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): { [key: string]: boolean } | null => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

}
