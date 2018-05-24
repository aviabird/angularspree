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
    { name: 'Relevance', value: 0 },
    { name: 'Newest', value: 1 },
    { name: 'A To Z', value: 2 },
    { name: 'Z To A', value: 3 }
  ]

  selectedOption: string;
  printedOption: string;

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
    if (this.selectedOption === 'Newest') {
      const urlTree = this.routernomal.createUrlTree([], {
        queryParams: { 'q[s]': 'updated_at+asc' },
        queryParamsHandling: 'merge',
        preserveFragment: true
      });
      this.routernomal.navigateByUrl(urlTree);
    }
    if (this.selectedOption === 'Relevance') {
      const urlTree = this.routernomal.createUrlTree([], {
        queryParams: { 'q[s]': '' },
        queryParamsHandling: 'merge',
        preserveFragment: true
      });
      this.routernomal.navigateByUrl(urlTree);
    }
    if (this.selectedOption === 'A To Z') {
      const urlTree = this.routernomal.createUrlTree([], {
        queryParams: { 'q[s]': 'name+asc' },
        queryParamsHandling: 'merge',
        preserveFragment: true
      });
      this.routernomal.navigateByUrl(urlTree);
    }
    if (this.selectedOption === 'Z To A') {
      const urlTree = this.routernomal.createUrlTree([], {
        queryParams: { 'q[s]': 'name+desc' },
        queryParamsHandling: 'merge',
        preserveFragment: true
      });
      this.routernomal.navigateByUrl(urlTree);
    }
  }
}
