import { CheckoutEffects } from './../checkout/effects/checkout.effects';
import { CheckoutActions } from './../checkout/actions/checkout.actions';
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
// import { ProductDummyService } from './services/product-dummy.service';

import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from '../auth/effects/auth.effects';
import { ProductEffects } from '../product/effects/product.effects';
import { UserActions } from '../user/actions/user.actions';
import { UserEffects } from '../user/effects/user.effects';
import { UserService } from '../user/services/user.service';
import { CanActivateViaAuthGuard } from './guards/auth.guard';


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
    EffectsModule.run(CheckoutEffects),
    EffectsModule.run(UserEffects)
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
    // ProductDummyService,
    ProductService,
    AuthActions,
    CheckoutActions,
    UserActions,
    UserService,
    CanActivateViaAuthGuard
  ]
})
export class CoreModule {}
