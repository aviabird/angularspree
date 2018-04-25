import { APP_DATA } from './../../../../shared/data/app-data';
import { Component, OnInit, Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-categories-menu-dropdown',
  templateUrl: './categories-menu-dropdown.component.html',
  styleUrls: ['./categories-menu-dropdown.component.scss']
})
export class CategoriesMenuDropdownComponent implements OnInit {
  @Input() taxonomies;

  constructor() {

  }

  ngOnInit() {

  }
}
