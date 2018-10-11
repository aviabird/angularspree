import { UserActions } from './../../../actions/user.actions';
import { AppState } from './../../../../interfaces';
import { ProductService } from './../../../../core/services/product.service';
import { environment } from './../../../../../environments/environment';
import { Product } from './../../../../core/models/product';
import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-favorite-product-list-item',
  templateUrl: './favorite-product-list-item.component.html',
  styleUrls: ['./favorite-product-list-item.component.scss']
})
export class FavoriteProductListItemComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private productService: ProductService,
    private store: Store<AppState>,
    private userActions: UserActions
  ) { }

  ngOnInit() {
  }

  removeFromFavorite(id: number) {
    this.productService.removeFromFavorite(id).subscribe((status) => {
      // this.store.dispatch(this.userActions.removeFromFavoriteProducts(id));
    });
  }
}
