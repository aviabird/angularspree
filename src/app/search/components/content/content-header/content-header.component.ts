import { LayoutState } from './../../../../layout/reducers/layout.state';
import { Router } from '@angular/router';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentHeaderComponent implements OnInit {
  @Input() paginationInfo;
  @Input() fillterList;
  @Input() layoutState: LayoutState;
  subselectedItem;
  childselectedItem;

  options = [
    { name: 'Newest', value: 1 },
    { name: 'Avg.Customer Review', value: 2 },
    { name: 'Most Reviews', value: 3 },
    { name: 'A To Z', value: 4 },
    { name: 'Z To A', value: 5 },
    { name: 'Relevence', value: 6 }
  ]

  queryMap = {
    Newest: 'updated_at+asc',
    'Avg.Customer Review': 'avg_rating+desc',
    'Most Reviews': 'reviews_count+desc',
    'A To Z': 'name+asc',
    'Z To A': 'name+desc',
    Relevance: '',
  }

  selectedOption = 'Relevance';
  isMobile: any;
  searchKeyword = '';
  selectedEntry;
  isfilterModalShown;
  issortModalShown
  defaultselectedEntry = 'Relevance';
  constructor(private routernomal: Router) { }

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

  ngOnInit() {
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
      queryParams: { 'q[s]': this.queryMap[i] },
      queryParamsHandling: 'merge',
      preserveFragment: true,
    });
    this.routernomal.navigateByUrl(urlTree);
    this.selectedOption = i;
  }
}
