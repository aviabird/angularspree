import { filter } from 'rxjs/operators';
import { getAuthStatus } from './auth/reducers/selectors';
import { AppState } from './interfaces';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CheckoutService } from './core/services/checkout.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '../../node_modules/@angular/platform-browser';
import { environment } from '../environments/environment';

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

  constructor(
    private router: Router,
    private checkoutService: CheckoutService,
    private store: Store<AppState>,
    private metaTitle: Title
  ) {
    router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.currentUrl = e.url;
        this.findCurrentStep(this.currentUrl);
        window.scrollTo(0, 0);
        this.metaTitle.setTitle(environment.config.landing_page.title)
      });
  }

  ngOnInit() {
    this.store.select(getAuthStatus).subscribe(() => {
      this.orderSub$ = this.checkoutService.fetchCurrentOrder().subscribe();
    });

    this.addFaviconIcon();
  }

  addFaviconIcon() {
    const link = document.querySelector(`link[rel*='icon']`) || document.createElement('link') as any;
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
}
