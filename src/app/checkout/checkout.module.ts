import { CheckoutEffects } from './effects/checkout.effects';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './../product/effects/product.effects';
import { CheckoutActions } from './actions/checkout.actions';
import { CartModule } from './cart/cart.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';

import { CheckoutRoutes as routes } from './checkout.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.run(CheckoutEffects),
    CartModule
  ],
  declarations: [
    // CartComponent,
    AddressComponent,
    PaymentComponent
  ],
  providers: [
    CheckoutActions
  ]
})
export class CheckoutModule { }
