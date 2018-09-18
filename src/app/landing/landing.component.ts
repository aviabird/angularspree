import { environment } from './../../environments/environment';
import { switchMap } from 'rxjs/operators';
import { ProductService } from './../core/services/product.service';
import { Observable } from 'rxjs';
import { getProducts, getBrands } from './../product/reducers/selectors';
import { ProductActions } from './../product/actions/product-actions';
import { Store } from '@ngrx/store';
import { AppState } from './../interfaces';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Brand } from '../core/models/brand';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {
  products$: Observable<any>;
  products_by_taxons$: Observable<any>;
  taxon_by_name: any;
  taxons_id: string;
  favoriteProducts$: any;
  dealsType = environment.config.Deals.type;
  brands$: Observable<Brand[]>;
  freeShippingAmount = environment.config.freeShippingAmount;
  currency = environment.config.currency_symbol;

  // dealsType is taxonomi whose value is set in app-data.ts;

  constructor(private store: Store<AppState>,
    private actions: ProductActions,
    private productService: ProductService,
    private meta: Meta,
    private metaTitle: Title) {}

  ngOnInit() {
    this.store.dispatch(this.actions.getAllProducts());
    this.products$ = this.store.select(getProducts);
    this.brands$ = this.store.select(getBrands);
    this.products_by_taxons$ = this.productService.getTaxonByName(this.dealsType).pipe(
      switchMap(response => {
        this.taxon_by_name = response;
        if (this.taxon_by_name.count > 0) {
          this.taxons_id = this.taxon_by_name.taxonomies[0].root.id;
          return this.productService.getProductsByTaxonNP(this.taxons_id);
        } else {
          return [];
        }
      }))

    this.addMetaInfo()
  }

  addMetaInfo() {
    const landingPageMeta = environment.config.metaInfo.landingPage;
    this.meta.updateTag({ name: 'description', content: landingPageMeta.description });
    this.meta.updateTag({ name: 'keywords', content: landingPageMeta.title });
    this.meta.updateTag({ name: 'title', content: landingPageMeta.title });
    this.meta.updateTag({ name: 'apple-mobile-web-app-title', content: environment.appName });
    this.meta.updateTag({ property: 'og:description', content: landingPageMeta.description })
    this.meta.updateTag({ property: 'og:url', content: environment.config.frontEndUrl });
    this.meta.updateTag({ property: 'twitter:title', content: landingPageMeta.description });
    this.metaTitle.setTitle(landingPageMeta.title);
  }
}
