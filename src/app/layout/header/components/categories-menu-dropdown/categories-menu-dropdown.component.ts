import { SearchActions } from './../../../../home/reducers/search.actions';
import { Store } from '@ngrx/store';
import { AppState } from './../../../../interfaces';
import { ActivatedRoute } from '@angular/router';
import { environment } from './../../../../../environments/environment';
import { APP_DATA } from './../../../../shared/data/app-data';
import { Component, OnInit, Input } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http'

@Component({
  selector: 'app-categories-menu-dropdown',
  templateUrl: './categories-menu-dropdown.component.html',
  styleUrls: ['./categories-menu-dropdown.component.scss']
})
export class CategoriesMenuDropdownComponent implements OnInit {
  @Input() taxonomies;
  queryParams: any;
  apiUrl = environment.apiEndpoint + 'api/v1/taxons/products';

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private searchActions: SearchActions,
    private store: Store<AppState>) {
    this.route.queryParams
      .subscribe(params => {
        this.queryParams = params
      });
  }
  ngOnInit() {

  }

  get_categeory() {
    const search = new URLSearchParams();
    search.set('id', this.queryParams.id);
    const options = new RequestOptions({ search: search });

    this.http
      .get(this.apiUrl, options)
      .subscribe(data =>
        this.store.dispatch(
          this.searchActions.getProducsByKeywordSuccess({ products: data.json() })))
  }
}
