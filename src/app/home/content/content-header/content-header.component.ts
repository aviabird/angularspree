import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
  @Output() toggleSize = new EventEmitter();
  selectedSize: string = 'COZY';

  constructor() { }

  ngOnInit() {
  }

  toggleView(view) {
    this.selectedSize = view;
    this.toggleSize.emit({size: view});
  }

  isSmallSelected(): boolean {
    return this.selectedSize === 'COZY';
  }

  isBigSelected(): boolean {
    return this.selectedSize === 'COMPACT';
  }

}
