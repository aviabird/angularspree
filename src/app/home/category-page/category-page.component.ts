import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../interfaces';
import { Store } from '@ngrx/store';
import { getTaxonomies, rootTaxonomyId } from '../../product/reducers/selectors';
import { SearchActions } from '../reducers/search.actions';
import { Observable, forkJoin, of } from 'rxjs';
import { getProductsByKeyword } from '../reducers/selectors';
import { ProductService } from '../../core/services/product.service';
import { tap, map, switchMap, reduce } from 'rxjs/operators';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryPageComponent implements OnInit {

  category_banner = environment.config.category_banner;
  categeory_number: number;
  id: any
  selectedTaxons$: Observable<any>
  productList$: Observable<any>

  constructor(private route: ActivatedRoute,
    private store: Store<AppState>,
    private searchActions: SearchActions,
    private productService: ProductService) { }

  ngOnInit() {
    this.selectedTaxons$ =
      this.store.select(getTaxonomies)
        .pipe(
          switchMap(taxonomies => {
            const taxonomy = taxonomies[0];

            return this.route.params.pipe(
              map(params => {
                const categeory_number = params.number
                let taxons = [];
                if (taxonomy) { taxons = taxonomy.root.taxons };
                return taxons.find(taxon => taxon.id === parseInt(categeory_number));;
              }),
              map(selectedTaxon => {
                if (typeof selectedTaxon === 'undefined') { return of({}) };

                const taxons = selectedTaxon.taxons;

                this.productList$ = forkJoin(
                  taxons.map(taxon => this.productService.getProductsByTaxon(`id=${taxon.id}`))
                )
                return selectedTaxon;
              })
            );
          })
        );
  }

}

