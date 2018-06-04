
import {tap} from 'rxjs/operators';
import { AuthService } from './../../../core/services/auth.service';
import { AuthActions } from './../../actions/auth.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './../../../interfaces';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit, OnDestroy {
  forgetPasswordForm: FormGroup;
  forgetPasswordSubs: Subscription;
  returnUrl: string;
  emailSent = false;
  sentEmail = '';

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
    private actions: AuthActions,
    private authService: AuthService
  ) {

  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const values = this.forgetPasswordForm.value;
    const keys = Object.keys(values);

    if (this.forgetPasswordForm.valid) {
      this.forgetPasswordSubs = this.authService
        .forgetPassword(values).pipe(
        tap(_ => {
          this.emailSent = true,
            this.sentEmail = values.email
        }, (user) => {
          const errors = user.error.error || 'Something went wrong';
          keys.forEach(val => {
            this.pushErrorFor(val, errors);
          });
        })).subscribe();
    } else {
      keys.forEach(val => {
        const ctrl = this.forgetPasswordForm.controls[val];
        if (!ctrl.valid) {
          this.pushErrorFor(val, null);
          ctrl.markAsTouched();
        };
      });
    }
  }


  private pushErrorFor(ctrl_name: string, msg: string) {
    this.forgetPasswordForm.controls[ctrl_name].setErrors({ 'msg': msg });
  }

  initForm() {
    const email = '';

    this.forgetPasswordForm = this.fb.group({
      'email': [email, Validators.required]
    });
  }

  ngOnDestroy() {
    if (this.forgetPasswordSubs) { this.forgetPasswordSubs.unsubscribe(); }
  }
}
