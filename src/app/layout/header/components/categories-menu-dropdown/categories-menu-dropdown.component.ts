import { SearchActions } from './../../../../home/reducers/search.actions';
import { Store } from '@ngrx/store';
import { AppState } from './../../../../interfaces';
import { ActivatedRoute } from '@angular/router';
import { environment } from './../../../../../environments/environment';
import { APP_DATA } from './../../../../shared/data/app-data';
import { Component, OnInit, Input } from '@angular/core';
import { Http, RequestOptions, URLSearchParams } from '@angular/http'
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-categories-menu-dropdown',
  templateUrl: './categories-menu-dropdown.component.html',
  styleUrls: ['./categories-menu-dropdown.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        left: 0
      })),
      state('hide', style({
        left: -200 + 'px'
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class CategoriesMenuDropdownComponent implements OnInit {
  @Input() taxonomies;
  @Input() isScrolled;
  @Input() screenwidth;
  dropdownWidth: any;
  menuTaxons: any;
  autoclose: boolean;

  queryParams: any;
  apiUrl = environment.apiEndpoint + 'api/v1/taxons/products';

  show = false;
  get stateName() {
    return this.show ? 'show' : 'hide'
  }


  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private searchActions: SearchActions,
    private store: Store<AppState>) {
    this.route.queryParams
      .subscribe(params => {
        this.queryParams = params;
      });
  }
  ngOnInit() {

    if (this.screenwidth <= 1000) {
      this.dropdownWidth = this.screenwidth - 10 + 'px';
      this.autoclose = false;
    }
    else {
      this.autoclose = true;
    }
  }

  showCategory(i) {
    this.show = !this.show;
    this.menuTaxons = this.taxonomies[0].root.taxons[i];

  }
  showCategoryonclick(i) {

    if (this.screenwidth <= 1000) {
      this.menuTaxons = this.taxonomies[0].root.taxons[i];
    }
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
