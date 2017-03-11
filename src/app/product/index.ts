import { NgModule } from '@angular/core';

// Components
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
    // components
    ProductDetailComponent,
    ProductComponent
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
