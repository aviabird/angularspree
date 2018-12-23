import { Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './core/guards/auth.guard';


export const routes: Routes = [
  {
    path: '',
    loadChildren: './landing/landing.module#LandingModule',
    data: { preload: true, delay: true },
  },
  {
    path: 'search',
    loadChildren: './home/index#HomeModule',
    data: { preload: false, delay: false },
  },
  {
    path: 's',
    loadChildren: './modules/search/search.module#SearchModule',
    data: { preload: false, delay: false },
  },
  {
    path: 'checkout',
    loadChildren: './checkout/checkout.module#CheckoutModule',
    data: { preload: true, delay: true },
  },
  {
    path: 'user',
    loadChildren: './user/index#UserModule',
    canActivate: [ CanActivateViaAuthGuard ],
    data: { preload: false, delay: false },
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    data: { preload: false, delay: false },
  },
  {
    path: '',
    loadChildren: './product/product.module#ProductModule',
    data: { preload: false, delay: false },
  }
];
