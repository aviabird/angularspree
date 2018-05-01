import { APP_DATA } from './../../shared/data/app-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contact_info = APP_DATA.contact_info;
  constructor() { }

  ngOnInit() {
  }

}
