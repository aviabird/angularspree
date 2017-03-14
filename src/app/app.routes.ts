import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/index#HomeModule' },
  { path: 'cart', loadChildren: './cart/index#CartModule' },
  { path: 'user', loadChildren: './user/index#UserModule' },
  { path: 'product', loadChildren: './product/index#ProductModule' }
];
