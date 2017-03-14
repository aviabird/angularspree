import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces';
import { getAuthStatus } from '../../auth/reducers/selectors';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  signInForm: FormGroup;
  isAuthenticated: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.initForm();
    this.isAuthenticated = this.store.select(getAuthStatus);
  }

  initForm() {
    const email = 'admin@spree.com';
    const password = 'pankajrawat';

    this.signInForm = this.fb.group({
      'email': [email, Validators.required],
      'password': [password, Validators.required]
    });

    this.authService.login(this.signInForm.value).subscribe(
      data => console.log(data)
    );
  }

}
