import { ProductActions } from './../../product/actions/product-actions';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { SearchActions } from './../../home/reducers/search.actions';
import { getTaxonomies, getBrands } from './../../product/reducers/selectors';
import { getTotalCartItems } from './../../checkout/reducers/selectors';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Input,
  HostListener
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces';
import { Observable } from 'rxjs';
import { AuthActions } from '../../auth/actions/auth.actions';
import { TemplateRef, Inject, PLATFORM_ID } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Renderer2 } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { LayoutState } from '../reducers/layout.state';
import { isPlatformBrowser } from '@angular/common';
import { getAuthStatus } from '../../auth/reducers/selectors';
import { ProductService } from '../../core/services/product.service';
import { Brand } from '../../core/models/brand';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(window:scroll)': 'updateHeader($event)'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @ViewChild('autoShownModal') autoShownModal: ModalDirective;
  @Input() layoutState: LayoutState;
  freeShippingAmount = environment.config.freeShippingAmount
  currency = environment.config.currency_symbol
  isModalShown = false;
  isSearchopen = true;
  isAuthenticated$: Observable<boolean>;
  totalCartItems$: Observable<number>;
  taxonomies$: Observable<any>;
  user$: Observable<any>;
  headerConfig = environment.config.header;
  isScrolled = false;
  currPos: Number = 0;
  scrollPos = {
    currPos: 0,
    startPos: 0,
    changePos: 5,
  };
  isMobile = false;
  screenwidth: any;
  modalRef: BsModalRef;
  config = { backdrop: false, ignoreBackdropClick: false };
  isUser: boolean;
  brands$: Observable<Array<Brand>>;

  constructor(
    private store: Store<AppState>,
    private authActions: AuthActions,
    private searchActions: SearchActions,
    private actions: ProductActions,
    private authAction: AuthActions,
    private router: Router,
    private modalService: BsModalService,
    private renderer: Renderer2,
    private productService: ProductService,
    @Inject(PLATFORM_ID) private platformId: any) { }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'cat-mobile' }, this.config)
    );
  }

  ngOnInit() {
    this.store.dispatch(this.authActions.authorize())
    this.store.dispatch(this.actions.getAllTaxonomies());
    this.store.dispatch(this.actions.getBrands());
    this.store.dispatch(this.authAction.getRatingCategories());
    this.isAuthenticated$ = this.store.select(getAuthStatus);
    this.taxonomies$ = this.store.select(getTaxonomies);
    this.brands$ = this.store.select(getBrands);
    this.totalCartItems$ = this.store.select(getTotalCartItems);

    if (isPlatformBrowser(this.platformId)) {
      if (this.isSearchopen) {
        this.renderer.addClass(document.body, 'issearchopen');
      } else {
        this.renderer.removeClass(document.body, 'issearchopen');
      }
    }

    if (isPlatformBrowser(this.platformId)) {
      this.screenwidth = window.innerWidth;
    }
    this.isMobile = this.layoutState.isMobileView;
    if (this.isMobile) { this.isScrolled = false; }
  }

  selectTaxon(taxon) {
    this.router.navigateByUrl('/');
    this.store.dispatch(this.searchActions.addFilter(taxon));
  }

  showModal(): void {
    this.isModalShown = !this.isModalShown;
    this.isSearchopen = !this.isSearchopen;
    if (isPlatformBrowser(this.platformId)) {
      if (this.isModalShown) {
        this.renderer.addClass(document.body, 'isModalShown');
      } else {
        this.renderer.removeClass(document.body, 'isModalShown');
      }
      if (this.isSearchopen) {
        this.renderer.addClass(document.body, 'issearchopen');
      } else {
        this.renderer.removeClass(document.body, 'issearchopen');
      }
    }
  }

  hideModal(): void {
    this.autoShownModal.hide();
  }
  onHidden(): void {
    this.isModalShown = false;
  }

  @HostListener('window:scroll', ['$event'])
  updateHeader($event) {
    if (isPlatformBrowser(this.platformId)) {
      if (this.screenwidth >= 1000) {
        this.scrollPos.currPos = (window.pageYOffset || $event.target.scrollTop) - ($event.target.clientTop || 0);
        if (
          this.scrollPos.currPos >= this.scrollPos.changePos &&
          window.pageYOffset >= 100
        ) {
          this.isScrolled = true;
        } else {
          this.isScrolled = false;
        }
      }
    }
  }

  childCatLoaded(status) {
    this.isModalShown = status;
    this.isSearchopen = !status;
  }

  allmenuClosed(status) {
    this.isModalShown = status;
    this.isSearchopen = !status;
    if (isPlatformBrowser(this.platformId)) {
      if (this.isSearchopen) {
        this.renderer.addClass(document.body, 'issearchopen');
      } else {
        this.renderer.removeClass(document.body, 'issearchopen');
      }
    }
  }
}
