import { PaymentService } from './services/payment.service';
import { PaymentComponent } from './payment.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaymentModesListComponent } from './payment-modes-list/payment-modes-list.component';
import { CashOnDeliveryComponent } from './payment-modes-list/cash-on-delivery/cash-on-delivery.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HostedPaymentComponent } from './payment-modes-list/hosted-payment/hosted-payment.component';

@NgModule({
  declarations: [
    PaymentComponent,
    PaymentModesListComponent,
    HostedPaymentComponent,
    CashOnDeliveryComponent
  ],
  exports: [],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsModule.forRoot()
  ],
  providers: [
    PaymentService
  ]
})
export class PaymentModule { }
