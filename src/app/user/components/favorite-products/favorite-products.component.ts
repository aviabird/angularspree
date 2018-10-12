import { Store } from '@ngrx/store';
import { AppState } from './../../../interfaces';
import { UserActions } from './../../actions/user.actions';
import { Observable } from 'rxjs';
import { Product } from './../../../core/models/product';
import { ProductService } from './../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { getUserFavoriteProducts } from '../../reducers/selector';

@Component({
  selector: 'app-favorite-products',
  templateUrl: './favorite-products.component.html',
  styleUrls: ['./favorite-products.component.scss']
})
export class FavoriteProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(
    private store: Store<AppState>,
    private userActions: UserActions
  ) {
    this.products$ = this.store.select(getUserFavoriteProducts);
  }

  ngOnInit() {
    // this.store.dispatch(this.userActions.getUserFavoriteProducts());
  }

}
