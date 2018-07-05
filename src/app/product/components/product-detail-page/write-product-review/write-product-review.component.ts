import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../../../core/services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../interfaces';
import { ProductActions } from '../../../actions/product-actions';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-write-product-review',
  templateUrl: './write-product-review.component.html',
  styleUrls: ['./write-product-review.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class WriteProductReviewComponent implements OnInit {

  reviewForm: FormGroup;
  queryParams: any
  showThanks = false;
  product$: Observable<any>;
  submitReview = true
  
  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router,
    private store: Store<AppState>,
    private productsActions: ProductActions
  ) {

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
    if (JSON.parse(localStorage.getItem('user'))) {
      this.reviewForm = this.fb.group({
        rating: [rating, Validators.required],
        name: [JSON.parse(localStorage.getItem('user')).email],
        title: [title, Validators.required],
        review: [review, Validators.required]
      }
      );
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
        .subscribe((res) => {
          this.showThanks = true;
          this.submitReview = false;
        })
    } else {
      this.toastrService.info('All fields are rquired', 'Invalid!')
    }
  }
  goToProduct(prodId) {
    this.router.navigate([prodId])
  }
}
