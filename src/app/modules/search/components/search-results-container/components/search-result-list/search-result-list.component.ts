import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../../../core/models';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent implements OnInit {
  @Input() searchResults: Array<Product>;
  dummyResults = new Array(5);

  constructor() { }

  ngOnInit() {
  }
}
