import { environment } from './../../../../../environments/environment';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '../../../../../../node_modules/@angular/common';

@Component({
  selector: 'app-footer-contact-info',
  templateUrl: './footer-contact-info.component.html',
  styleUrls: ['./footer-contact-info.component.scss']
})
export class FooterContactInfoComponent implements OnInit {
  contact_info = environment.config.contact_info
  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
  }
  scollTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
