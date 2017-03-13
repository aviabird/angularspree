import { ProductActions } from './../product/actions/product-actions';
import { AppState } from './../interfaces';
import { getProducts } from './../product/reducers/selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Product } from '../core/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products$: Observable<any>;


  constructor(private store: Store<AppState>, private actions: ProductActions) {
    this.products$ = this.store.select(getProducts);

    this.products$.subscribe(data => {
      console.log('products ----->>>>>>>>', data);
      window['t'] = data;
    });
  }

  ngOnInit() {
      console.log('store object', this.store);
      this.store.dispatch(this.actions.getAllProducts());
  }

}
