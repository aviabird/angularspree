import { PaymentModule } from './payment/payment.module';
import { AddressModule } from './address/address.module';
import { CheckoutEffects } from './effects/checkout.effects';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './../product/effects/product.effects';
import { CheckoutActions } from './actions/checkout.actions';
import { CartModule } from './cart/cart.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { CheckoutRoutes as routes } from './checkout.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.run(CheckoutEffects),
    CartModule,
    AddressModule,
    PaymentModule
  ],
  declarations: [],
  providers: [
    CheckoutActions
  ]
})
export class CheckoutModule { }
