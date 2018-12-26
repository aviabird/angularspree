import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-single-selection-filter',
  templateUrl: './single-selection-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./single-selection-filter.component.scss']
})
export class SingleSelectionFilterComponent implements OnInit {
  @Input() filter: any;

  constructor() { }

  ngOnInit() {
  }

  get showFilter() { return this.filter.items.length > 1 }

}
