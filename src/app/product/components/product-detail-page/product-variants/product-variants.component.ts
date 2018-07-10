import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-variants',
  templateUrl: './product-variants.component.html',
  styleUrls: ['./product-variants.component.scss']
})
export class ProductVariantsComponent implements OnInit {
  @Input() customOptionTypesHash: any;
  @Input() currentSelectedOptions = {};
  @Input() mainOptions;
  @Input() correspondingOptions;
  @Output() onOptionClickEvent = new EventEmitter();
  
  constructor() {
  }

  ngOnInit() {
  }

  onOptionClick(option) {
    this.onOptionClickEvent.emit(option);
  }

  isDisabled(arrayTocheck, value) {
    return (arrayTocheck.indexOf(value) === -1);
  }

}