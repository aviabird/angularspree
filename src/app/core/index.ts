import { ProductDummyService } from './services/product-dummy.service';
import { NgModule } from '@angular/core';

// Components

// Services
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    // components
    // DummyService,
    // pipes
  ],
  exports: [
    // components
    // DummyService
  ],
  imports: [
  ],
  providers: [
    AuthService,
    ProductDummyService
  ]
})
export class CoreModule {}
