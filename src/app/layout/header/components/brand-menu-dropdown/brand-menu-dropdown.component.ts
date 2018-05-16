import { Store } from '@ngrx/store';
import { AppState } from './../../../../interfaces';
import { SearchActions } from './../../../../home/reducers/search.actions';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { URLSearchParams } from '@angular/http'

@Component({
  selector: 'app-brand-menu-dropdown',
  templateUrl: './brand-menu-dropdown.component.html',
  styleUrls: ['./brand-menu-dropdown.component.scss']
})
export class BrandMenuDropdownComponent implements OnInit {
  @Input() taxonomies;
  queryParams: any;

  constructor(
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

  getBrands() {
    const search = new URLSearchParams();
    search.set('id', this.queryParams.id);
    this.store.dispatch(this.searchActions.getProducsByTaxon(search.toString()));
  }
}
