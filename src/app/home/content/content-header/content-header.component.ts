import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
  @Output() toggleSize = new EventEmitter();

  @Input() productsCount;
  @Input() productsTotal_count;

  options = [
    { name: 'Newest', value: 1 },
    { name: 'A To Z', value: 2 },
    { name: 'Z To A', value: 3 }
  ]
  queryMap = {
    Newest: 'updated_at+asc',
    Relevance: '',
    'A To Z': 'ascend_by_master_price',
    'Z To A': 'name+desc',
  }

  selectedOption: 'Relevance';

  selectedSize = 'COZY';
  searchKeyword = ''
  constructor(private routernomal: Router) { }

  ngOnInit() {

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

  sortFilter() {
    const urlTree = this.routernomal.createUrlTree([], {
      queryParams: { 'q[s]': this.queryMap[this.selectedOption] },
      queryParamsHandling: 'merge',
      preserveFragment: true
    });
    this.routernomal.navigateByUrl(urlTree);
  }
}
