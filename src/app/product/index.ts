/**Angular Modules */
import { ProductEffects } from './effects/product.effects';
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
import { ProductComponent } from './product.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    // components
    ProductComponent,
    ProductDetailPageComponent,
    // pipes
  ],
  exports: [
    // components
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    ProductService,
    EffectsModule.run(ProductEffects),
  ]
})
export class ProductModule { }
