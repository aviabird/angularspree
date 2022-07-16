import { Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule),
    data: { preload: false, delay: false }
  },
  {
    path: 's',
    loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule),
    data: { preload: false, delay: false }
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule),
    data: { preload: true, delay: true }
  },
  {
    path: 'user',
    loadChildren: () => import('./user/index').then(m => m.UserModule),
    canActivate: [CanActivateViaAuthGuard],
    data: { preload: false, delay: false }
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    data: { preload: false, delay: false }
  },
  {
    path: '',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
    data: { preload: false, delay: false }
  }
];
