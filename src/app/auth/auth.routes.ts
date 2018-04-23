import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

export const AuthRoutes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recover', component: ForgetPasswordComponent},
  { path: 'updatePassword', component: UpdatePasswordComponent}
];
