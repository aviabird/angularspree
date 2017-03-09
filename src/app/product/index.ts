import { NgModule } from '@angular/core';

// Components
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    // components
    ProductDetailComponent,
    // pipes
  ],
  exports: [
    // components
    ProductDetailComponent,
  ],
  imports: [
  ]
})
export class ProductModule {}
