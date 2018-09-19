import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AppState } from './../../../interfaces';
import { SearchActions } from './../../reducers/search.actions';
import { Component, OnInit, Input } from '@angular/core';
import { URLSearchParams } from '@angular/http'
import { Brand } from '../../../core/models/brand';

@Component({
  selector: 'app-brand-filter',
  templateUrl: './brand-filter.component.html',
  styleUrls: ['./brand-filter.component.scss']
})
export class BrandFilterComponent implements OnInit {
  @Input() brandsList: Array<Brand>;

  queryParams: Object;
  constructor(
    private searchActions: SearchActions,
    private store: Store<AppState>,
    private router: ActivatedRoute) {}

  ngOnInit() {
  }

  brandFilter(s) {
  }
}
