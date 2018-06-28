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
  @Input() productsCount;
  @Input() productsTotal_count;
  @Input() fillterList;
  screenWidth: any;
  options = [
    { name: 'Newest', value: 1 },
    { name: 'A To Z', value: 2 },
    { name: 'Z To A', value: 3 }
  ]
  optionsMobile = [
    { name: 'Relevance', value: 1 },
    { name: 'Newest', value: 2 },
    { name: 'A To Z', value: 3 },
    { name: 'Z To A', value: 4 }
  ]
  queryMap = {
    Newest: 'updated_at+asc',
    Relevance: '',
    'A To Z': 'ascend_by_master_price',
    'Z To A': 'name+desc',
  }

  selectedOption: 'Relevance';
  isMobile: any;
  selectedSize = 'COZY';
  searchKeyword = '';
  selectedEntry;
  defaultselectedEntry = 'Relevance';
  constructor(private routernomal: Router) { }

  // tslint:disable-next-line:member-ordering
  @ViewChild(ModalDirective) modal: ModalDirective;


  showModal() {
    this.modal.show();
  }

  onSelectionChange(entry) {
    this.selectedEntry = entry;
    this.sortFilter(this.selectedEntry.name);
    this.modal.hide();
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

  sortFilter(i) {
    const urlTree = this.routernomal.createUrlTree([], {
      queryParams: { 'q[s]': this.queryMap[i] },
      queryParamsHandling: 'merge',
      preserveFragment: true
    });
    this.routernomal.navigateByUrl(urlTree);
  }
}
