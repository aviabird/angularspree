import { PaymentService } from './services/payment.service';
import { PaymentComponent } from './payment.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaymentModesListComponent } from './payment-modes-list/payment-modes-list.component';
import { PaymentModeComponent } from './payment-modes-list/payment-mode/payment-mode.component';
import { CreditCardComponent } from './payment-modes-list/credit-card/credit-card.component';
import { NetBankingComponent } from './payment-modes-list/net-banking/net-banking.component';
import { CashOnDeliveryComponent } from './payment-modes-list/cash-on-delivery/cash-on-delivery.component';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    PaymentComponent,
    PaymentModesListComponent,
    PaymentModeComponent,
    CreditCardComponent,
    NetBankingComponent,
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
