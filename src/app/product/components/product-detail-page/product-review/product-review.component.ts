
import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Product } from './../../../../core/models/product';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { getAuthStatus } from '../../../../auth/reducers/selectors';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductReviewComponent implements OnInit, OnChanges {
  @Input() reviewList;
  @Input() product: Product;
  @Input() isMobile;
  content: any[] = new Array();
  counter: number;
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
    this.counter = 0;

  }

  ngOnInit() {

  }
  ngOnChanges() {
    this.productID = this.product.id;
    console.log('shsd', this.reviewList.reviews.length);
    this.getData();
  }

  showReviewForm() {
    if (this.isAuthenticated) {
      this.router.navigate([this.product.slug, 'write_review'], { queryParams: { 'prodId': this.productID } });
    } else {
      this.toastrService.info('Please Login to write review.', 'Login')
    }
  }

  get reviewPercent() {
    return Math.ceil(this.product.avg_rating / 5 * 100);
  }

  get hasReviews() {
    return this.reviewList.total_ratings > 0;
  }
  getData() {

    for (let i = this.counter + 1; i < this.reviewList.reviews.length; i++) {
      this.content.push(this.reviewList.reviews[i]);
      if (i % 10 === 0) { break; }
    }
    this.counter += 10;

  }
}
