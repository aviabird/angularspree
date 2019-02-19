import { MultiselectFilterComponent } from './../multiselect-filter/multiselect-filter.component';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-single-selection-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './single-selection-filter.component.html',
  styleUrls: ['./single-selection-filter.component.scss']
})
export class SingleSelectionFilterComponent extends MultiselectFilterComponent {}
