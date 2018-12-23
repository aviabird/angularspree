import { Component, OnInit, Input } from '@angular/core';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-single-selection-filter',
  templateUrl: './single-selection-filter.component.html',
  styleUrls: ['./single-selection-filter.component.scss']
})
export class SingleSelectionFilterComponent implements OnInit {
  @Input() filter;

  constructor() { }

  ngOnInit() {
  }

}
