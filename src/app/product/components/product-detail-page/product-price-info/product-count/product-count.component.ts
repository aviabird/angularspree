import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Product } from '../../../../../core/models/product';
import { Router } from '@angular/router';
import { environment } from '../../../../../../environments/environment';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../../../../interfaces';
import { Store } from '@ngrx/store';
import { getTotalCartItems } from '../../../../../checkout/reducers/selectors';
import { getAuthStatus } from '../../../../../auth/reducers/selectors';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ProductCountComponent implements OnInit, OnDestroy {
  @Input() product: Product;
  @Input() isOrderable;
  @Output() onAddToCart = new EventEmitter<Object>();
  @Output() onMarkAsFavorites = new EventEmitter<Object>();
  isValidUser: boolean;
  totalCartItems$: Observable<number>;
  cartCount: number;
  subscriptionList$: Array<Subscription> = [];
  count = 1;
  appConfig = environment.config;

  constructor(private router: Router,
    private store: Store<AppState>, private toastrService: ToastrService) {
    this.totalCartItems$ = this.store.select(getTotalCartItems);
    this.subscriptionList$.push(
      this.store.select(getAuthStatus)
        .subscribe(isValidUser => { this.isValidUser = isValidUser })
    );
  }

  ngOnInit() { }

  increseCount() {
    this.count += 1;
  }

  /**
   *
   *
   * @memberof ProductcountComponent
   */
  decreaseCount() {
    this.count -= 1;
    if (this.count <= 1) {
      this.count = 1;
    }

  }

  addToCart(count: number) {
    if (this.isValidUser) {
      if (this.isOrderable) {
        this.onAddToCart.emit({ count: count, buyNow: false });
      } else { this.toastrService.error('This product is Out of stock!', 'Error!'); }
    } else {
      this.redirectToLogin();
    }
  }

  buyNow(count: number) {
    if (this.isValidUser) {
      this.onAddToCart.emit({ count: count, buyNow: true });
    } else {
      this.redirectToLogin();
    }
  }

  markAsFavorites() {
    this.onMarkAsFavorites.emit();
  }

  redirectToLogin() {
    this.router.navigate(['auth', 'login']);
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }
}
