import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import { AuthRoutes as routes } from './auth.routes';
import { SharedModule } from '../shared/index';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    UpdatePasswordComponent
  ]
})
export class AuthModule { }
