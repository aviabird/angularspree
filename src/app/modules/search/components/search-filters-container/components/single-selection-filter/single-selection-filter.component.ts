import { MultiselectFilterComponent } from './../multiselect-filter/multiselect-filter.component';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-single-selection-filter',
  templateUrl: './single-selection-filter.component.html',
  styleUrls: ['./single-selection-filter.component.scss']
})
export class SingleSelectionFilterComponent extends MultiselectFilterComponent {
}
