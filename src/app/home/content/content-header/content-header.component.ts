import { Router } from '@angular/router';
import { Component, OnInit, Input, ChangeDetectionStrategy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../../../interfaces';
import { searchKeyword } from '../../reducers/selectors';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentHeaderComponent implements OnInit {
  // @Input() paginationInfo;
  // @Input() fillterList;
  subselectedItem;
  childselectedItem;
  screenWidth: any;
  searchKeyword$: Observable<String>;

  options = [
    { name: 'Newest', value: 1 },
    { name: 'A To Z', value: 2 },
    { name: 'Z To A', value: 3 },
    { name: 'Relevence', value: 4 }
  ]

  queryMap = {
    Newest: 'date',
    'A To Z': 'A-Z',
    'Z To A': 'Z-A',
    Relevance: '',
  }

  selectedOption = 'Relevance';
  isMobile: any;
  searchKeyword = '';
  selectedEntry;
  isfilterModalShown;
  issortModalShown
  defaultselectedEntry = 'Relevance';
  constructor(private routernomal: Router,
    private store: Store<AppState>, 
    @Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.screen.width <= 768) {
        this.screenWidth = window.screen.width;
      }
    }
    this.searchKeyword$ =  this.store.select(searchKeyword);
  }

  sortModalShow() { this.issortModalShown = true; }
  sortModalhide() { this.issortModalShown = false; }

  filterModalShow() {
    this.isfilterModalShown = true;
  }

  filterModalhide() {
    this.isfilterModalShown = false;
  }

  onSelectionChange(entry) {
    this.selectedEntry = entry;
    this.sortFilter(this.selectedEntry.name);
    this.issortModalShown = false;
    this.selectedOption = entry;
  }

  fltermodelstate(flag) {
    this.isfilterModalShown = flag;
  }

  selectedInput(newVal) {
    this.subselectedItem = newVal;

  }

  childselectedInput(newVal) {
    this.childselectedItem = newVal;

  }

  sortFilter(i) {
    const urlTree = this.routernomal.createUrlTree([], {
      queryParams: { 'sort': this.queryMap[i] },
      queryParamsHandling: 'merge',
      preserveFragment: true,
    });
    this.routernomal.navigateByUrl(urlTree);
    this.selectedOption = i;
  }


}
