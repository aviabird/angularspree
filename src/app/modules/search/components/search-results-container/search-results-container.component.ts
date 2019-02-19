import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { Product } from '../../../../core/models';

@Component({
  selector: 'app-search-results-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-results-container.component.html',
  styleUrls: ['./search-results-container.component.scss']
})
export class SearchResultsContainerComponent implements OnInit {
  @Input() searchResults: Array<Product>;

  constructor() {}

  ngOnInit() {}
}
