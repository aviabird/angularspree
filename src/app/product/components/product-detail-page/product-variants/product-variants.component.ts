import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-variants',
  templateUrl: './product-variants.component.html',
  styleUrls: ['./product-variants.component.scss']
})
export class ProductVariantsComponent implements OnInit {
  @Input() customOptionTypesHash: any;
  @Input() currentSelectedOptions = {};
  @Input() mainOptions: any;
  @Input() correspondingOptions: any;
  @Output() onOptionClickEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onOptionClick(option: {}) {
    this.onOptionClickEvent.emit(option);
  }

  isDisabled(arrayTocheck: { indexOf: (arg0: any) => number; }, value: any) {
    return (arrayTocheck.indexOf(value) === -1);
  }

}
