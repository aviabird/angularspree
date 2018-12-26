import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-multiselect-filter',
  templateUrl: './multiselect-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./multiselect-filter.component.scss']
})
export class MultiselectFilterComponent implements OnInit {
  @Input() filter: any;

  constructor() { }

  ngOnInit() {
  }

  get showFilter() { return this.filter.items.length > 1 }

}
