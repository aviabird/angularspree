import { APP_DATA } from './../../shared/data/app-data';
import { ProductService } from './../../core/services/product.service';
import { LpPromoComponent } from './lp-promo/lp-promo.component';
import { LpVideosComponent } from './lp-videos/lp-videos.component';
import { LpBrandsComponent } from './lp-brands/lp-brands.component';
import { LpFavoritesComponent } from './lp-favorites/lp-favorites.component';
import { LpProductListComponent } from './lp-product-list/lp-product-list.component';
import { Observable } from 'rxjs/Observable';
import { getProducts, getTaxonomies } from './../../product/reducers/selectors';
import { ProductActions } from './../../product/actions/product-actions';
import { Store } from '@ngrx/store';
import { AppState } from './../../interfaces';
import { Product } from './../../core/models/product';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DragScrollDirective } from 'ngx-drag-scroll';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  products$: Observable<any>;
  products_by_taxons: any;
  taxon_by_name: any;
  taxons_id: number;
  favoriteProducts: any;
  dealsType = APP_DATA.Deals.type;

  // dealsType is taxonomi whose value is set in app-data.ts;

  constructor(private store: Store<AppState>, private actions: ProductActions, private productService: ProductService) {
    this.store.dispatch(this.actions.getAllProducts());
    this.products$ = this.store.select(getProducts);

    const result = this.productService.getTaxonByName(this.dealsType)
      .switchMap(response => {
        this.taxon_by_name = response;
        if (this.taxon_by_name.count > 0) {
          this.taxons_id = this.taxon_by_name.taxonomies[0].root.id;
          return this.productService.getProducts_by_taxon(this.taxons_id);
        } else {
          return []
        }
      })
      .subscribe(response => this.products_by_taxons = response);

    this.productService.getFavoriteProducts()
      .subscribe(response => this.favoriteProducts = response)
  }

  ngOnInit() {

  }
}
