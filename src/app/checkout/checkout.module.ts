import { StoreModule } from '@ngrx/store';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { PaymentModule } from './payment/payment.module';
import { AddressModule } from './address/address.module';
import { CheckoutEffects } from './effects/checkout.effects';
import { EffectsModule } from '@ngrx/effects';
import { CheckoutActions } from './actions/checkout.actions';
import { CartModule } from './cart/cart.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './checkout.routes';
import { OrderFailedComponent } from './order-failed/order-failed.component';
import { SharedModule } from '../shared';
import * as fromCheckout from './reducers/checkout.reducer';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('checkout', fromCheckout.reducer),
    EffectsModule.forRoot([CheckoutEffects]),
    CartModule,
    AddressModule,
    PaymentModule,
    SharedModule
  ],
  declarations: [OrderSuccessComponent, OrderFailedComponent],
  providers: [CheckoutActions]
})
export class CheckoutModule {}
