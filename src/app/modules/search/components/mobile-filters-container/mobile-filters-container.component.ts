import { Component, OnInit } from '@angular/core';
import { SearchFiltersContainerComponent } from '../search-filters-container/search-filters-container.component';

@Component({
  selector: 'app-mobile-filters-container',
  templateUrl: './mobile-filters-container.component.html',
  styleUrls: ['./mobile-filters-container.component.scss']
})
export class MobileFiltersContainerComponent extends SearchFiltersContainerComponent {}
