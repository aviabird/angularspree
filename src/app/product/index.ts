import { ProductComponent } from './product.component';
/**Angular Modules */
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/index';

import { RouterModule } from '@angular/router';
// For Temp Puropose
// TODO: Remove this from here
import { ProductService } from './../core/services/product.service';

// Components
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
// Routes
import { ProductRoutes as routes } from './product.routes';

@NgModule({
  declarations: [
    // components
    ProductComponent,
    ProductDetailPageComponent,
    // pipes
  ],
  exports: [
    // components
    ProductDetailPageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule {}
