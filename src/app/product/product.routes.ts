import { WriteProductReviewComponent } from './components/product-detail-page/write-product-review/write-product-review.component';
import { Routes } from '@angular/router';
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { ProductComponent } from './product.component';

export const ProductRoutes: Routes = [
  { path: '', component: ProductComponent, pathMatch: 'full' },
  { path: ':id', component: ProductDetailPageComponent },
  { path: ':id/write_review', component: WriteProductReviewComponent }
];

