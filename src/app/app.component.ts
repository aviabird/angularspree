import { LoadLayouts } from './layout/actions/layout.actions';
import { LayoutState } from './layout/reducers/layout.state';
import { getlayoutStateJS } from './layout/reducers/layout.selector';
import { environment } from './../environments/environment';
import { filter } from 'rxjs/operators';
import { getAuthStatus } from './auth/reducers/selectors';
import { AppState } from './interfaces';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { CheckoutService } from './core/services/checkout.service';
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { AuthActions } from './auth/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  currentUrl: string;
  currentStep: string;
  checkoutUrls = ['/checkout/cart', '/checkout/address', '/checkout/payment'];
  layoutState$: Observable<LayoutState>;
  schema = {};
  subscriptionList$: Array<Subscription> = [];

  constructor(
    private router: Router,
    private checkoutService: CheckoutService,
    private store: Store<AppState>,
    private metaTitle: Title,
    private meta: Meta,
    private authAction: AuthActions,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.currentUrl = e.url;
        this.findCurrentStep(this.currentUrl);
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo(0, 0);
        }
        this.addMetaInfo();
      });

    this.schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': environment.appName,
      'url': isPlatformBrowser(this.platformId) ? location.origin : ''
    };
  }

  ngOnInit() {
    this.subscriptionList$.push(
      this.store.select(getAuthStatus).subscribe((data: boolean) => {
        if (data) {
          this.subscriptionList$.push(
            this.checkoutService.fetchCurrentOrder()
              .subscribe(_ => { },
                _ => {
                  localStorage.clear()
                  this.store.dispatch(this.authAction.logoutSuccess())
                }
              )
          )
        } else {
          if (isPlatformBrowser(this.platformId)) {
            const guestOrder: string = localStorage.getItem('order_number') ? JSON.parse(localStorage.getItem('order_number')) : null;
            if (guestOrder) {
              this.subscriptionList$.push(
                this.checkoutService.getOrder().subscribe()
              );
            }
          }
        }
      })
    );

    this.layoutState$ = this.store.select(getlayoutStateJS);

    this.addFaviconIcon();
    this.addConstMetaInfo();
    this.initLayoutState();
  }

  private addFaviconIcon() {
    if (isPlatformBrowser(this.platformId)) {
      const link =
        (
          document.querySelector(`link[rel*='icon']`) ||
          document.createElement('link')
        ) as HTMLLinkElement;
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = environment.config.fevicon;
      document.getElementsByTagName('head')[0].appendChild(link);
    }
  }

  private findCurrentStep(currentRoute) {
    const currRouteFragments = currentRoute.split('/');
    const length = currRouteFragments.length;
    this.currentStep = currentRoute.split('/')[length - 1];
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }

  private addMetaInfo() {
    const metaInfo = environment.config.metaInfo;
    this.meta.updateTag({ name: 'description', content: metaInfo.description });
    this.meta.updateTag({ name: 'keywords', content: metaInfo.title });
    this.meta.updateTag({ name: 'title', content: metaInfo.title });
    this.meta.updateTag({ name: 'apple-mobile-web-app-title', content: environment.appName });
    this.meta.updateTag({ property: 'og:description', content: metaInfo.description });
    this.meta.updateTag({ property: 'og:url', content: environment.config.frontEndUrl });
    this.meta.updateTag({ property: 'twitter:title', content: metaInfo.description });
    this.metaTitle.setTitle(metaInfo.title);
  }

  private addConstMetaInfo() {
    const metaInfo = environment.config.metaInfo;
    this.meta.updateTag({ name: 'google-site-verification', content: metaInfo.googleSiteVerification })
  }

  private initLayoutState() {
    const layoutState: LayoutState = {} as LayoutState;
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth < 1000) {
        layoutState.isMobileView = true;
      }
    }
    this.store.dispatch(new LoadLayouts(layoutState));
  }
}
