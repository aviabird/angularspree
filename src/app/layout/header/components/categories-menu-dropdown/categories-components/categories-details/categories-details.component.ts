import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.scss']
})
export class CategoriesDetailsComponent implements OnInit {
  @Input() taxons;

  constructor() { }
  ngOnInit() {
  }

}
