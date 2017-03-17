import { getLineItems } from './../../../reducers/selectors';
import { CheckoutActions } from './../../../actions/checkout.actions';
import { AppState } from './../../../../interfaces';
import { Store } from '@ngrx/store';
import { LineItem } from './../../../../core/models/line_item';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.scss']
})
export class LineItemListComponent implements OnInit {

  lineItems$: Observable<LineItem[]>;

  constructor(private store: Store<AppState>, private actions: CheckoutActions) {
    this.lineItems$ = this.store.select(getLineItems);
   }

  ngOnInit() {
  }

}
