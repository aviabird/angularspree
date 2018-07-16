import { environment } from './../../environments/environment';
import { switchMap } from 'rxjs/operators';
import { ProductService } from './../core/services/product.service';
import { Observable } from 'rxjs';
import { getProducts } from './../product/reducers/selectors';
import { ProductActions } from './../product/actions/product-actions';
import { Store } from '@ngrx/store';
import { AppState } from './../interfaces';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {
  products$: Observable<any>;
  products_by_taxons: any;
  taxon_by_name: any;
  taxons_id: string;
  favoriteProducts: any;
  dealsType = environment.config.Deals.type;
  brands: any;


  // dealsType is taxonomi whose value is set in app-data.ts;

  constructor(private store: Store<AppState>,
    private actions: ProductActions,
    private productService: ProductService) {
    this.store.dispatch(this.actions.getAllProducts());
    this.products$ = this.store.select(getProducts);
    // #TO DO: Brands name hardcoded for now.
    this.brands = this.productService.getTaxonByName('Brands')
      .subscribe(data => {
        this.brands = data
      })

    const result = this.productService.getTaxonByName(this.dealsType).pipe(
      switchMap(response => {
        this.taxon_by_name = response;
        if (this.taxon_by_name.count > 0) {
          this.taxons_id = this.taxon_by_name.taxonomies[0].root.id;
          return this.productService.getProductsByTaxonNP(this.taxons_id);
        } else {
          return []
        }
      }))
      .subscribe(response => this.products_by_taxons = response);

    this.productService.getFavoriteProducts()
      .subscribe(response => this.favoriteProducts = response)
  }

  ngOnInit() {
  }
}
