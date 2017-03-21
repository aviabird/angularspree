import { CheckoutService } from './services/checkout.service';
import { NgModule } from '@angular/core';
import { ProductDummyService } from './services/product-dummy.service';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';
// Components

// Services
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http';
import { ProductService } from './services/product.service';
import { AuthActions } from '../auth/actions/auth.actions';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from '../auth/effects/auth.effects';
import { ProductEffects } from '../product/effects/product.effects';
import { UserActions } from '../user/actions/user.actions';
import { UserEffects } from '../user/effects/user.effects';
import { UserService } from '../user/services/user.service';


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
    // Were not working on modules sice update to rc-5
    // TO BE moved to respective modules.
    EffectsModule.run(AuthenticationEffects),
    EffectsModule.run(ProductEffects),
    EffectsModule.run(UserEffects)
  ],
  providers: [
    AuthService,
    {
      provide: HttpService,
      useFactory: httpInterceptor,
      deps: [ XHRBackend, RequestOptions]
    },
    CheckoutService,
    ProductDummyService,
    ProductService,
    AuthActions,
    UserActions,
    UserService
  ]
})
export class CoreModule {}
