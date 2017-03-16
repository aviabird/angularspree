import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-summary',
  templateUrl: './filter-summary.component.html',
  styleUrls: ['./filter-summary.component.scss']
})
export class FilterSummaryComponent implements OnInit {
  filters: string[] = ['Roadster', 'Will Lifestyle'];

  constructor() { }

  ngOnInit() {
  }

}
