import { Store } from '@ngrx/store';
import { AppState } from './../../../../interfaces';
import { SearchActions } from './../../../../home/reducers/search.actions';
import { environment } from './../../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http'
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-brand-menu-dropdown',
  templateUrl: './brand-menu-dropdown.component.html',
  styleUrls: ['./brand-menu-dropdown.component.scss']
})
export class BrandMenuDropdownComponent implements OnInit {
  @Input() taxonomies;
  queryParams: any;
  apiUrl = environment.apiEndpoint + 'api/v1/products';

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

  get_brands() {
    const search = new URLSearchParams();
    search.set('q[name_cont]', this.queryParams['q[name_cont]'])
    search.set('id', this.queryParams.id);
    const options = new RequestOptions({ search: search });

    this.http
      .get(this.apiUrl, options)
      .subscribe(data =>
        this.store.dispatch(
          this.searchActions.getProducsByKeywordSuccess({ products: data.json() })
        )
      )
  }
}
