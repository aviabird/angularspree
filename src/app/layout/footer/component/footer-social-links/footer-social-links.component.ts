import { APP_DATA } from './../../../../shared/data/app-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-social-links',
  templateUrl: './footer-social-links.component.html',
  styleUrls: ['./footer-social-links.component.scss']
})
export class FooterSocialLinksComponent implements OnInit {
  social_links = APP_DATA.footer_social_links;
  constructor() { }

  ngOnInit() {
  }

}
