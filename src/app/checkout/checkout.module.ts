import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';

import { CheckoutRoutes as routes } from './checkout.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    CartComponent,
    AddressComponent,
    PaymentComponent
  ]
})
export class CheckoutModule { }
