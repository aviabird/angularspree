import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.scss']
})
export class CategoriesDetailsComponent implements OnInit, OnChanges {
@Input() taxons;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log('categeory', this.taxons)
  }
}
