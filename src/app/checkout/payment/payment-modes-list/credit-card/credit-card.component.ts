import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CheckoutService } from '../../../../core/services/checkout.service';
import { CheckoutActions } from '../../../actions/checkout.actions';
import { AppState } from '../../../../interfaces';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  constructor(private checkoutService: CheckoutService,
    private checkoutActions: CheckoutActions,
    private store: Store<AppState>
  ) { }

  @Output() onPayNow: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit() {
  }
  payNow() {
    this.onPayNow.emit(true);
  }
}
