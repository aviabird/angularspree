import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from './../../../core/models/product';
import { AppState } from './../../../interfaces';
import { ProductActions } from './../../actions/product-actions';
import { getSelectedProduct } from './../../reducers/selectors';
import { ProductService } from './../../../core/services/product.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {
  actionsSubscription: Subscription;
  product$: Observable<Product>;
  routeSubs: Subscription;
  productId: any;

  constructor(private store: Store<AppState>,
              private actions: ProductActions,
              private route: ActivatedRoute) {
  /**Get a Selected Product from Store */
  this.product$ = this.store.select(getSelectedProduct);
  };

  /**On Init 
   * 1. Parse route params
   * 2. Retrive product id
   * 3. Ask for the product detail based on product id 
   * */
  ngOnInit() {
    this.actionsSubscription = this.route.params.subscribe(
      (params: any) => {
        this.productId = params['id'];
        this.store.dispatch(this.actions.getProductDetail(this.productId));
      }
    );
  }
}
