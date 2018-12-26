import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiselect-filter',
  templateUrl: './multiselect-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./multiselect-filter.component.scss']
})
export class MultiselectFilterComponent implements OnInit {
  @Input() filter: any;
  @Input() skipCount = 0;
  @Output() filterClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get showFilter() { return this.filter.items.length > 0 }

  selectedItem(value: string | number) {
    this.filterClick.emit(value);
  }

}
