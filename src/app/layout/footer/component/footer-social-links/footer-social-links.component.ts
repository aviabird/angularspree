import { environment } from './../../../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-social-links',
  templateUrl: './footer-social-links.component.html',
  styleUrls: ['./footer-social-links.component.scss']
})
export class FooterSocialLinksComponent implements OnInit {
  social_links = environment.config.footer_social_links;
  constructor() { }

  ngOnInit() {
  }

}
