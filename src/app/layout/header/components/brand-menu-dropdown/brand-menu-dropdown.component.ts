import { Store } from '@ngrx/store';
import { AppState } from './../../../../interfaces';
import { SearchActions } from './../../../../home/reducers/search.actions';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { URLSearchParams } from '@angular/http'

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
    private route: ActivatedRoute,
    private searchActions: SearchActions,
    private store: Store<AppState>) {}

  ngOnInit() {
  }

  getBrands(id: string) {
    this.store.dispatch(this.searchActions.getProductsByTaxon(`id=${id}`));
  }

  onOpenChange(data: boolean): void {
    this.isOpen = !this.isOpen;
  }
}
