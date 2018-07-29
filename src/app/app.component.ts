import { environment } from './../environments/environment';
import { filter } from 'rxjs/operators';
import { getAuthStatus } from './auth/reducers/selectors';
import { AppState } from './interfaces';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CheckoutService } from './core/services/checkout.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  orderSub$: Subscription;
  currentUrl: string;
  currentStep: string;
  checkoutUrls = ['/checkout/cart', '/checkout/address', '/checkout/payment'];
  schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': environment.appName,
    'url': location.origin
  };

  constructor(
    private router: Router,
    private checkoutService: CheckoutService,
    private store: Store<AppState>,
    private metaTitle: Title,
    private meta: Meta
  ) {
    router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.currentUrl = e.url;
        this.findCurrentStep(this.currentUrl);
        window.scrollTo(0, 0);
        this.addMetaInfo();
      });
  }

  ngOnInit() {
    this.store.select(getAuthStatus).subscribe(() => {
      this.orderSub$ = this.checkoutService.fetchCurrentOrder().subscribe();
    });

    this.addFaviconIcon();
  }

  addFaviconIcon() {
    const link =
      document.querySelector(`link[rel*='icon']`) ||
      (document.createElement('link') as any);
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = environment.config.fevicon;
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  isCheckoutRoute() {
    if (!this.currentUrl) {
      return false;
    }
    const index = this.checkoutUrls.indexOf(this.currentUrl);
    if (index >= 0) {
      return true;
    } else {
      return false;
    }
  }

  private findCurrentStep(currentRoute) {
    const currRouteFragments = currentRoute.split('/');
    const length = currRouteFragments.length;
    this.currentStep = currentRoute.split('/')[length - 1];
  }

  ngOnDestroy() {
    this.orderSub$.unsubscribe();
  }

  addMetaInfo() {
    this.meta.updateTag({
      name: 'description',
      content: environment.config.landing_page.description
    });
    this.meta.updateTag({
      name: 'keywords',
      content: environment.config.landing_page.title
    });
    this.meta.updateTag({
      name: 'title',
      content: environment.config.landing_page.title
    });
    this.meta.updateTag({
      name: 'apple-mobile-web-app-title',
      content: environment.appName
    });
    this.meta.updateTag({
      property: 'og:description',
      content: environment.config.landing_page.description
    });
    this.meta.updateTag({
      property: 'og:url',
      content: environment.config.frontEndUrl
    }),
      this.meta.updateTag({
        property: 'twitter:title',
        content: environment.config.landing_page.description
      });
    this.metaTitle.setTitle(environment.config.landing_page.title);
  }
}
