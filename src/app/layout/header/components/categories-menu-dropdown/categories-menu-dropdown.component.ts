import { SearchActions } from './../../../../home/reducers/search.actions';
import { Store } from '@ngrx/store';
import { AppState } from './../../../../interfaces';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';


import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { URLSearchParams } from '@angular/http'


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
  show = false;
  get stateName() {
    return this.show ? 'show' : 'hide'
  }


  constructor(
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

  getCategeory() {
    const search = new URLSearchParams();
    search.set('id', this.queryParams.id);
    this.store.dispatch(this.searchActions.getProducsByTaxon(search.toString()))
  }
}
