import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../core/models';

@Component({
  selector: 'app-search-results-container',
  templateUrl: './search-results-container.component.html',
  styleUrls: ['./search-results-container.component.scss']
})
export class SearchResultsContainerComponent implements OnInit {
  @Input() searchResults: Array<Product>;

  constructor() { }

  ngOnInit() {
  }

}
