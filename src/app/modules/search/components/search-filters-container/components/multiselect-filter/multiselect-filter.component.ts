import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multiselect-filter',
  templateUrl: './multiselect-filter.component.html',
  styleUrls: ['./multiselect-filter.component.scss']
})
export class MultiselectFilterComponent implements OnInit {
  @Input() filter;

  constructor() { }

  ngOnInit() {
  }

}
