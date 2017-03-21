import { getSelectedTaxonIds } from './../../reducers/selectors';
import { Observable } from 'rxjs/Rx';
import { CheckoutService } from './../../../core/services/checkout.service';
import { CheckoutActions } from './../../../checkout/actions/checkout.actions';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { Product } from './../../../core/models/product';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products;
  @Input('taxonIds') selectedTaxonIds;

  constructor(private checkoutService: CheckoutService, private store: Store<AppState>, private checkoutActions: CheckoutActions) { }

  ngOnInit() { }

  getProductImageUrl(url) {
    return environment.API_ENDPOINT + url;
  }

  addToCart(product: Product) {
    const variant_id = product.master.id;
    this.store.dispatch(this.checkoutActions.addToCart(variant_id));
  }

}
