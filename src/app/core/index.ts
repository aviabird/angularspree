import { CheckoutService } from './services/checkout.service';
import { NgModule } from '@angular/core';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';
// Components

// Services
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http';
import { ProductService } from './services/product.service';
import { AuthActions } from '../auth/actions/auth.actions';
import { VariantRetriverService } from './services/variant-retriver.service';
import { VariantParserService } from './services/variant-parser.service';
import { ProductDummyService } from './services/product-dummy.service';

export function httpInterceptor(
  backend: XHRBackend,
  defaultOptions: RequestOptions,
) {
  return new HttpService(backend, defaultOptions);
}

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
    VariantParserService,
    VariantRetriverService,
    AuthService,
    {
      provide: HttpService,
      useFactory: httpInterceptor,
      deps: [ XHRBackend, RequestOptions]
    },
    CheckoutService,
    ProductDummyService,
    ProductService,
    AuthActions
  ]
})
export class CoreModule {}
