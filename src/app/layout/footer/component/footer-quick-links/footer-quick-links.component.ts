import { APP_DATA } from './../../../../shared/data/app-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-quick-links',
  templateUrl: './footer-quick-links.component.html',
  styleUrls: ['./footer-quick-links.component.scss']
})
export class FooterQuickLinksComponent implements OnInit {
  footer_pages = APP_DATA.footer_page_links;

  constructor() { }

  ngOnInit() {
  }

}
