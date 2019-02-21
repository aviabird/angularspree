import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-filters-container',
  templateUrl: './mobile-filters-container.component.html',
  styleUrls: ['./mobile-filters-container.component.scss']
})
export class MobileFiltersContainerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    debugger;
    this.featureSelected.emit(feature);
  }
}
