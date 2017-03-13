import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/index#HomeModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' },
  { path: 'user', loadChildren: './user/index#UserModule' },
  { path: 'product', loadChildren: './product/index#ProductModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }
];
