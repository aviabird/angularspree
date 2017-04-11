import { Routes } from '@angular/router';
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { ProductComponent } from './product.component';

export const ProductRoutes: Routes = [
  { path: '', component: ProductComponent, pathMatch: 'full' },
  { path: ':id', component: ProductDetailPageComponent }
];

