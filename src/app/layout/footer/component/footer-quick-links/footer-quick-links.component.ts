import { environment } from './../../../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-quick-links',
  templateUrl: './footer-quick-links.component.html',
  styleUrls: ['./footer-quick-links.component.scss']
})
export class FooterQuickLinksComponent implements OnInit {
  footer_pages = environment.config.footer_page_links;

  constructor() { }

  ngOnInit() {
  }

}
