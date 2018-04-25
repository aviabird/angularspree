import { APP_DATA } from './../../../../../../../shared/data/app-data';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-brand-logo',
  templateUrl: './brand-logo.component.html',
  styleUrls: ['./brand-logo.component.scss']
})
export class BrandLogoComponent implements OnInit {
  @Input() brand;
  constructor() { }

  ngOnInit() {
  }

}
