import { Product } from './../../core/models/product';
import { ProductActions } from './../actions/product-actions';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

// import { ProductService } from './../../core/services/product.service';
import { ProductDummyService } from './../../core/services/product-dummy.service';
import { Action } from '@ngrx/store';

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions,
              private productService: ProductDummyService,
              private productActions: ProductActions) { }

  // tslint:disable-next-line:member-ordering
  @Effect()
    GetAllProducts$: Observable<Action> = this.actions$
    .ofType(ProductActions.GET_ALL_PRODUCTS)
    .switchMap((action: Action) => {
      console.log('should call a service, ', action);
      return this.productService.getProducts();
    })
    .map((data: any) => {
      console.log('should call a action', data);
      return this.productActions.getAllProductsSuccess({products: data});
    });
}
