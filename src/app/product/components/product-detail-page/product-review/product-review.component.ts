
import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import { Product } from './../../../../core/models/product';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { getAuthStatus, getRatingCategories } from '../../../../auth/reducers/selectors';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../../environments/environment';
import { RatingOption } from '../../../../core/models/rating_option';
import { ProductActions } from '../../../actions/product-actions';
import { getProductRatingOptions } from '../../../reducers/selectors';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductReviewComponent implements OnInit, OnDestroy {
  @Input() product: Product;
  @Input() isMobile: boolean;
  isAuthenticated: boolean;
  reviewsDisplayLimit = environment.config.reviewsDisplayLimit;
  ratingOptions$: Observable<Array<RatingOption>>;
  subscriptionList$: Array<Subscription> = [];

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private toastrService: ToastrService,
    private productAction: ProductActions) { }

  ngOnInit() {
    this.subscriptionList$.push(
      this.store.select(getAuthStatus).subscribe(auth => { this.isAuthenticated = auth }),
      this.store.select(getRatingCategories).subscribe(ratingCategories => {
        if (ratingCategories.product) {
          this.store.dispatch(this.productAction.getRatingsOptions(ratingCategories.product));
        }
      }),
    );
    this.ratingOptions$ = this.store.select(getProductRatingOptions);
  }

  showReviewForm() {
    if (this.isAuthenticated) {
      this.router.navigate([this.product.slug, 'write_review'], { queryParams: { 'prodId': this.product.id } });
    } else {
      this.toastrService.info('Please Login to write review.', 'Login')
    }
  }

  get reviewPercent() {
    return Math.ceil(+this.product.rating_summary.average_rating / this.reviewsDisplayLimit * 100);
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }
}
