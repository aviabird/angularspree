import { Store } from '@ngrx/store';
import { AppState } from './../../../../interfaces';
import { SearchActions } from './../../../../search/reducers/search.actions';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-brand-menu-dropdown',
  templateUrl: './brand-menu-dropdown.component.html',
  styleUrls: ['./brand-menu-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandMenuDropdownComponent implements OnInit {
  @Input() taxonomies;
  queryParams: any;
  isOpen: any;

  constructor(
    private searchActions: SearchActions,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  getBrands(id: string): void {
    this.store.dispatch(this.searchActions.getProductsByTaxon(`id=${id}`));
  }

  onOpenChange(_): void {
    this.isOpen = !this.isOpen;
  }
}
