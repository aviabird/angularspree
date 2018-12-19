import { getLineItems } from './../../../reducers/selectors';
import { AppState } from './../../../../interfaces';
import { Store } from '@ngrx/store';
import { LineItem } from './../../../../core/models/line_item';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-line-item-list',
  templateUrl: './line-item-list.component.html',
  styleUrls: ['./line-item-list.component.scss']
})
export class LineItemListComponent implements OnInit, OnDestroy {
  @Input() isMobile;
  lineItems$: Observable<LineItem[]>;
  subscriptionList$: Array<Subscription> = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.lineItems$ = this.store.select(getLineItems);
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }
}
