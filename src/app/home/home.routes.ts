import { ProductDetailPageComponent } from './../product/components/product-detail-page/product-detail-page.component';
import { ProductComponent } from './../product/product.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home.component';

export const HomeRoutes = [
  { path: '', component: LandingComponent },
  { path: 'search', component: HomeComponent },
  { path: '', loadChildren: '../product/index#ProductModule' }
];
