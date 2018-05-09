import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit, OnChanges {
  @Output() toggleSize = new EventEmitter();

  @Input() count;
  @Input() total_count;

  selectedSize = 'COZY';
  searchKeyword = ''
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.searchKeyword = localStorage.getItem('searchKeyword')
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

}
