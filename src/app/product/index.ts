import { ProductEffects } from './effects/product.effects';
import { NgModule } from '@angular/core';

// Components
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './product.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    // components
    ProductDetailComponent,
    ProductComponent,
    // pipes
  ],
  exports: [
    // components
    ProductDetailComponent,
  ],
  imports: [
    EffectsModule.run(ProductEffects),
  ]
})
export class ProductModule {}
