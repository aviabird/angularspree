
import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { Product } from './../../../../core/models/product';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { getAuthStatus } from '../../../../auth/reducers/selectors';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../../environments/environment';
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
  updated: any[] = new Array();
  isShowMore: boolean;
  productID: any
  isAuthenticated: boolean;
  start = 0;
  reviewsDisplayLimit = environment.config.reviewsDisplayLimit;
  end = this.reviewsDisplayLimit;

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

  }
  ngOnChanges() {
    this.productID = this.product.id;
    if (this.reviewList.reviews) {
      this.updated = this.reviewList.reviews.slice(this.start, this.end);
      this.content = this.updated;
    }
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

  showMore() {
    this.isShowMore = true;
    this.start = this.end;
    this.end = this.end + this.reviewsDisplayLimit;
    this.updated = this.reviewList.reviews.slice(this.start, this.end);
    this.updated.forEach((review, i) => {
      this.content.push(review);
    })
  }

  showLess() {
    this.start = 0;
    this.end = this.reviewsDisplayLimit;
    this.updated = this.reviewList.reviews.slice(this.start, this.end);
    this.content = this.updated;
  }
  get activeShowMore() {
    return this.updated.length >= this.reviewsDisplayLimit && this.content.length !== this.reviewList.reviews.length
  }

  get activeShowLess() {
    return this.isShowMore && this.content.length === this.reviewList.reviews.length
  }
}
