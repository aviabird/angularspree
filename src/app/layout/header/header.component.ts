import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  signInForm: FormGroup;
  
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    // this.authService.login(this.signInForm.value).subscribe(
    //   data => console.log(data)
    // )
  }

  initForm() {
    // let email: 'admin@spree.com';
    // let password: 'pankajrawat';

    // this.signInForm = this.fb.group({
    //   'email': [email, Validators.required],
    //   'password': [password, Validators.required]
    // });
  }

}
