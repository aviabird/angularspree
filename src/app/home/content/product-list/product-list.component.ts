import { getSelectedTaxonIds } from './../../reducers/selectors';
import { CheckoutActions } from './../../../checkout/actions/checkout.actions';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { Product } from './../../../core/models/product';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products;
  @Input('taxonIds') selectedTaxonIds;
  @Input() toggleLayout;
  page: number;
  queryParams: any;

  constructor(
    private store: Store<AppState>,
    private checkoutActions: CheckoutActions,
    private router: ActivatedRoute,
    private routernomal: Router) {
    this.router.queryParams
      .subscribe(params => {
        this.queryParams = params
      });
  }

  ngOnInit() { }

  getProductImageUrl(url) {
    return environment.apiEndpoint + url;
  }

  addToCart(product: Product) {
    const variant_id = product.master.id;
    this.store.dispatch(this.checkoutActions.addToCart(variant_id));
  }

  getMargin() {
    return this.toggleLayout.size === 'COZY' ? '0 7.5px 20px 7.5px' : '0 80px 20px 0';
  }

  trackByFn(index, item) {
    return index;
  }

  pageChanged(event: any): void {
    this.page = event.page;
    const urlTree = this.routernomal.createUrlTree([], {
      queryParams: { page: this.page },
      queryParamsHandling: 'merge',
      preserveFragment: true
    });
    this.routernomal.navigateByUrl(urlTree);
  }
}
