import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brand-menu-dropdown',
  templateUrl: './brand-menu-dropdown.component.html',
  styleUrls: ['./brand-menu-dropdown.component.scss']
})
export class BrandMenuDropdownComponent implements OnInit {
  @Input() taxonomies;
  constructor() { }

  ngOnInit() {
  }
}
