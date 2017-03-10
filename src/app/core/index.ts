import { NgModule } from '@angular/core';
import { ProductDummyService } from './services/product-dummy.service';

// Components

// Services
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http';

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
    HttpService,
    ProductDummyService
  ]
})
export class CoreModule {}
