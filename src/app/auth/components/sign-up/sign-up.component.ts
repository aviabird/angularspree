import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from '../../../interfaces';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { getAuthStatus } from '../../reducers/selectors';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  title = environment.AppName;
  registerSubs: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private authService: AuthService
  ) {
    this.redirectIfUserLoggedIn();
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const values = this.signUpForm.value;
    this.registerSubs = this.authService.register(values).subscribe(data => {
      const errors = data.errors;
      if (errors) {
        const keys = Object.keys(errors);

        keys.forEach(val => {
          this.signUpForm.controls[val].setErrors({
            'msg': errors[val][0]
          });
        });
      }
    });
  }

  initForm() {
    const email = '';
    const password = '';
    const password_confirmation = '';

    this.signUpForm = this.fb.group({
      'email': [email, Validators.required],
      'password': [password, Validators.required],
      'password_confirmation': [password_confirmation, Validators.required],
    });
  }

  redirectIfUserLoggedIn() {
    this.store.select(getAuthStatus).subscribe(
      data => {
        if (data === true) { this.router.navigateByUrl('/'); }
      }
    );
  }

  ngOnDestroy() {
    if (this.registerSubs) { this.registerSubs.unsubscribe(); }
  }
}
