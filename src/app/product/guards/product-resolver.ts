import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { Observable ,  of } from 'rxjs';
import { ProductService } from './../../core/services/product.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Product } from '../../core/models/product';

@Injectable()
export class ProductResolver implements Resolve<Product> {

  constructor(
    private productService: ProductService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<Product> {
    const productId = route.params['id'];
    return this.productService.getProduct(productId).pipe(
      catchError(_ => {
        this.toastrService.error('', 'Product not found');
        this.router.navigate(['']);
        return of(new Product());
      })
    );
  }
}
