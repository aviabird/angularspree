import { getShipAddress } from './../reducers/selectors';
import { AppState } from './../../interfaces';
import { Store } from '@ngrx/store';
import { Address } from './../../core/models/address';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  shipAddress$: Observable<Address>;

  constructor(private store: Store<AppState>) {
    this.store.select(getShipAddress);
  }

  ngOnInit() {
  }

}
