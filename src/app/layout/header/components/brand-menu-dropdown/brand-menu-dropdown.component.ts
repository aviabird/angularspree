import { Store } from '@ngrx/store';
import { AppState } from './../../../../interfaces';
import { SearchActions } from './../../../../home/reducers/search.actions';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Brand } from '../../../../core/models/brand';

@Component({
  selector: 'app-brand-menu-dropdown',
  templateUrl: './brand-menu-dropdown.component.html',
  styleUrls: ['./brand-menu-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandMenuDropdownComponent implements OnInit, OnDestroy {
  @Input() brands: Array<Brand>;
  queryParams: any;
  isOpen: any;
  subscriptionList$: Array<Subscription> = [];
  constructor(
    private route: ActivatedRoute,
    private searchActions: SearchActions,
    private store: Store<AppState>) {}

  ngOnInit() {
  }

  onOpenChange(data: boolean): void {
    this.isOpen = !this.isOpen;
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }
}
