import { SearchActions } from './../../../../search/reducers/search.actions';
import { Store } from '@ngrx/store';
import { AppState } from './../../../../interfaces';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
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
        left: -100 + '%'
      })),
      state('hide', style({
        left: 0
      })),
      transition('show => hide', animate('100ms ease-out')),
      transition('hide => show', animate('200ms ease-in'))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  backBtnShow = false;
  isOpen: boolean;
  subIsopen: boolean;
  index: any;
  selectedItem: 0;


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
    } else {
      this.autoclose = true;
    }
  }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  showCategory(i) {
    this.menuTaxons = this.taxonomies[0].root.taxons[i];
    this.selectedItem = i;

  }

  showCategoryonclick(i) {
    this.show = !this.show;
    if (this.screenwidth <= 1000) {
      this.menuTaxons = this.taxonomies[0].root.taxons[i];
    }
  }

  backtolist() {
    this.show = !this.show;
  }

  childCatLoaded(status) {
    this.backBtnShow = status;
  }

  onOpenChange(data: boolean): void {
    if (typeof this.taxonomies[0].root !== 'undefined') {
      this.isOpen = !this.isOpen;
      this.menuTaxons = this.taxonomies[0].root.taxons[0];
      this.selectedItem = 0;
    }
  }
}
