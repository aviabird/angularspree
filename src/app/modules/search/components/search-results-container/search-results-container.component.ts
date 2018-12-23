import { getProducts } from './../../../../product/reducers/selectors';
import { Observable } from 'rxjs';
import { AppState } from './../../../../interfaces';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../core/models';
import { ProductActions } from '../../../../product/actions/product-actions';

@Component({
  selector: 'app-search-results-container',
  templateUrl: './search-results-container.component.html',
  styleUrls: ['./search-results-container.component.scss']
})
export class SearchResultsContainerComponent implements OnInit {
  searchResults$: Observable<Array<Product>>;

  constructor(
    private store: Store<AppState>,
    private actions: ProductActions,
  ) { }

  ngOnInit() {
    this.store.dispatch(this.actions.getAllProducts());
    this.searchResults$ = this.store.select(getProducts);
  }

}
