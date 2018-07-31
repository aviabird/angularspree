import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../../../../core/models/product';
import { Router } from '@angular/router';
import { environment } from '../../../../../../environments/environment';
import { Observable } from 'rxjs';
import { AppState } from '../../../../../interfaces';
import { Store } from '@ngrx/store';
import { getTotalCartItems } from '../../../../../checkout/reducers/selectors';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ProductCountComponent implements OnInit {
  @Input() product: Product;
  @Input() isOrderable;
  @Output() onAddToCart = new EventEmitter<Object>();
  @Output() onMarkAsFavorites = new EventEmitter<Object>();

  totalCartItems$: Observable<number>;
  cartCount: number;

  count: any = 1;
  appConfig = environment.config;
  constructor(private router: Router,
    private store: Store<AppState>) {
    this.totalCartItems$ = this.store.select(getTotalCartItems);
  }

  ngOnInit() {

  }

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
    this.onAddToCart.emit({ count: count, buyNow: false });
  }

  buyNow(count: number) {
    this.onAddToCart.emit({ count: count, buyNow: true });
  }

  markAsFavorites() {
    this.onMarkAsFavorites.emit();
  }
}
