import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../../../core/services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { getAuthStatus } from '../../../../auth/reducers/selectors';

@Component({
  selector: 'app-write-product-review',
  templateUrl: './write-product-review.component.html',
  styleUrls: ['./write-product-review.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class WriteProductReviewComponent implements OnInit {

  reviewForm: FormGroup;
  queryParams: any
  showThanks = false;
  product$: Observable<any>;
  submitReview = true;
  isAuthenticated: boolean;
  result: any

  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.store.select(getAuthStatus).subscribe(auth => {
      this.isAuthenticated = auth;
    })
  }

  ngOnInit() {
    this.initForm();
    this.product$ = this.activeRoute.queryParams
      .pipe(
        switchMap(params => {
          return this.productService.getProduct(params.prodId)
        })
      )
  }

  initForm() {
    const rating = '';
    const name = '';
    const title = '';
    const review = '';
    if (this.isAuthenticated) {
      this.reviewForm = this.fb.group({
        rating: [rating, Validators.required],
        name: [JSON.parse(localStorage.getItem('user')).email],
        title: [title, Validators.required],
        review: [review, Validators.required]
      }
      );
    } else {
      this.router.navigate(['auth', 'login'])
    }
  }
  getProductImageUrl(url) {
    return url;
  }

  parse(formData) {
    return {
      review: {
        rating: formData.rating.toString(),
        name: formData.name,
        title: formData.title,
        review: formData.review,
        user_id: JSON.parse(localStorage.getItem('user')).id
      }
    }
  }

  onSubmit(prodId) {
    if (this.reviewForm.valid) {
      const values = this.reviewForm.value;
      const params = this.parse(values)
      this.productService.submitReview(prodId, params)
        .subscribe(res => {
          this.result = res;
          if (this.result === 'info') {
            this.goToProduct(prodId);
          } else if (this.result === 'success') {
            this.showThanks = true;
            this.submitReview = false;
          } else {
            this.goToProduct(prodId)
          }
        })
    } else {
      this.toastrService.error('All fields are rquired', 'Invalid!')
    }
  }
  goToProduct(prodId) {
    this.router.navigate([prodId])
  }
}
