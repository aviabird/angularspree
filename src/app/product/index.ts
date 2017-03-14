import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/index';

import { RouterModule } from '@angular/router';
// For Temp Puropose
// TODO: Remove this from here
import { ProductService } from './../core/services/product.service';

// Components
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { ProductComponent } from './product.component';

// Routes
import { ProductRoutes as routes } from './product.routes';

// Effects
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects';


@NgModule({
  declarations: [
    // components
    ProductDetailPageComponent,
    ProductComponent,
    // pipes
  ],
  exports: [
    // components
    ProductDetailPageComponent,
  ],
  imports: [
    SharedModule,
    EffectsModule.run(ProductEffects),
    RouterModule.forChild(routes),
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule {}
