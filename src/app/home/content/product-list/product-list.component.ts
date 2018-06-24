import { CheckoutActions } from './../../../checkout/actions/checkout.actions';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  @Input() products;
  // tslint:disable-next-line:no-input-rename
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

  ngOnInit() {
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
