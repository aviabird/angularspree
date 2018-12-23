import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filter-summary-filter-list',
  templateUrl: './filter-summary-filter-list.component.html',
  styleUrls: ['./filter-summary-filter-list.component.scss']
})
export class FilterSummaryFilterListComponent implements OnInit {
  @Input() filterList: Array<{}> = [
    {name: '20% discount and above'},
    {name: 'Slim fit'},
    {name: 'Dark colored'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
