import { getTotalCartValue } from './../reducers/selectors';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  totalCartValue: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.totalCartValue = this.store.select(getTotalCartValue);
  }

  ngOnInit() {
  }

}
