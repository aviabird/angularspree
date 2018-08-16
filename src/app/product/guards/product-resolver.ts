import { Observable } from 'rxjs/Observable';
import { ProductService } from './../../core/services/product.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Product } from '../../core/models/product';

@Injectable()
export class ProductResolver implements Resolve<Product> {

  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<Product> {
    const productId = route.params['id'];
    return this.productService.getProduct(productId);
  }
}
