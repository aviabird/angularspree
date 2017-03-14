import { CartService } from './services/cart.service';
import { NgModule } from '@angular/core';
import { ProductDummyService } from './services/product-dummy.service';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';

// Components

// Services
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http';
import { AuthActions } from '../auth/actions/auth.actions';


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
    AuthService,
    {
      provide: HttpService,
      useFactory: httpInterceptor,
      deps: [ XHRBackend, RequestOptions]
    },
    CartService,
    ProductDummyService,
    AuthActions
  ]
})
export class CoreModule {}
