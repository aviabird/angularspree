
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from './../../../../core/models/product';
import { Router } from '@angular/router';
import { Store } from '../../../../../../node_modules/@ngrx/store';
import { AppState } from '../../../../interfaces';
import { getAuthStatus } from '../../../../auth/reducers/selectors';
import { ToastrService } from '../../../../../../node_modules/ngx-toastr';
@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductReviewComponent implements OnInit {
  @Input() reviewList;
  @Input() product: Product;

  productID: any
  isAuthenticated: boolean;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private toastrService: ToastrService
  ) {
    this.store.select(getAuthStatus).subscribe(auth => {
      this.isAuthenticated = auth;
    })
  }

  ngOnInit() {
    this.productID = this.product.id;
  }

  showReviewForm() {
    if (this.isAuthenticated) {
      this.router.navigate([this.product.slug, 'write_review'], { queryParams: { 'prodId': this.productID } });
    }
    else {
      this.toastrService.info('Please Login to write review.', 'Login')
    }
  }
}
