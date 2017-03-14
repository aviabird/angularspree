import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from '../../../interfaces';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { getAuthStatus } from '../../reducers/selectors';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  title = environment.AppName;

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
    this.authService.register(values).subscribe();
  }

  initForm() {
    const email = '';
    const password = '';
    const confirm_password = '';

    this.signUpForm = this.fb.group({
      'email': [email, Validators.required],
      'password': [password, Validators.required],
      'confirm_password': [confirm_password, Validators.required],
    });
  }

  redirectIfUserLoggedIn() {
    this.store.select(getAuthStatus).subscribe(
      data => {
        if (data === true) { this.router.navigateByUrl('/'); }
      }
    );
  }
}
