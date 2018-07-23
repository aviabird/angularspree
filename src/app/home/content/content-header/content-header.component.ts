import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentHeaderComponent implements OnInit {
  @Output() toggleSize = new EventEmitter();
  @Input() paginationInfo;
  @Input() fillterList;
  subselectedItem;
  childselectedItem;
  screenWidth: any;

  options = [
    { name: 'Newest', value: 1 },
    { name: 'A To Z', value: 2 },
    { name: 'Z To A', value: 3 },
    { name: 'Relevence', value: 4 }
  ]
  optionsMobile = [
    { name: 'Newest', value: 1 },
    { name: 'A To Z', value: 2 },
    { name: 'Z To A', value: 3 },
    { name: 'Relevence', value: 4 }
  ]
  queryMap = {
    Newest: 'updated_at+asc',
    'A To Z': 'name+asc',
    'Z To A': 'name+desc',
    Relevance: '',
  }

  selectedOption = 'Relevance';
  isMobile: any;
  selectedSize = 'COZY';
  searchKeyword = '';
  selectedEntry;
  isfilterModalShown;
  issortModalShown
  defaultselectedEntry = 'Relevance';
  constructor(private routernomal: Router) { }

  // tslint:disable-next-line:member-ordering


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
    if (window.screen.width <= 768) {
      this.screenWidth = window.screen.width;
    }
  }

  toggleView(view) {
    this.selectedSize = view;
    this.toggleSize.emit({ size: view });
  }

  isSmallSelected(): boolean {
    return this.selectedSize === 'COZY';
  }

  isBigSelected(): boolean {
    return this.selectedSize === 'COMPACT';
  }
  fltermodelstate(flag) {
    this.isfilterModalShown = flag;
  }
  selectedInput(newVal) {
    this.subselectedItem = newVal;
    console.log(this.subselectedItem)
  }
  childselectedInput(newVal) {
    this.childselectedItem = newVal;
    console.log(this.childselectedItem)
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
