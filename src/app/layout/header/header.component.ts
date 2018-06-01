import { ProductActions } from './../../product/actions/product-actions';
import { environment } from './../../../environments/environment';
import { Router } from '@angular/router';
import { SearchActions } from './../../home/reducers/search.actions';
import { getTaxonomies } from './../../product/reducers/selectors';
import { getTotalCartItems } from './../../checkout/reducers/selectors';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces';
import { getAuthStatus } from '../../auth/reducers/selectors';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../core/services/auth.service';
import { AuthActions } from '../../auth/actions/auth.actions';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(window:scroll)': 'updateHeader($event)',

  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  isAuthenticated: Observable<boolean>;
  totalCartItems: Observable<number>;
  taxonomies$: Observable<any>;
  user$: Observable<any>;
  headerConfig = environment.config.header;
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;
  devicewidth: any;
  screenwidth: any;
  modalRef: BsModalRef;
  taxonList = [{
    'id': 4,
    'name': 'Mugs',
    'pretty_name': 'Categories -> Mugs',
    'permalink': 'categories/mugs',
    'parent_id': 1,
    'taxonomy_id': 1,
    'taxons': null
  },
  {
    'id': 3,
    'name': 'Bags',
    'pretty_name': 'Categories -> Bags',
    'permalink': 'categories/bags',
    'parent_id': 1,
    'taxonomy_id': 1,
    'taxons': null
  }, {
    'id': 8,
    'name': 'Ruby',
    'pretty_name': 'Brand -> Ruby',
    'permalink': 'brand/ruby',
    'parent_id': 2,
    'taxonomy_id': 2,
    'taxons': null
  }, {
    'id': 9,
    'name': 'Apache',
    'pretty_name': 'Brand -> Apache',
    'permalink': 'brand/apache',
    'parent_id': 2,
    'taxonomy_id': 2,
    'taxons': null
  }, {
    'id': 10,
    'name': 'Spree',
    'pretty_name': 'Brand -> Spree',
    'permalink': 'brand/spree',
    'parent_id': 2,
    'taxonomy_id': 2,
    'taxons': null
  }, {
    'id': 11,
    'name': 'Rails',
    'pretty_name': 'Brand -> Rails',
    'permalink': 'brand/rails',
    'parent_id': 2,
    'taxonomy_id': 2,
    'taxons': null
  }];

  constructor(
    private store: Store<AppState>,
    private authService: AuthService,
    private authActions: AuthActions,
    private searchActions: SearchActions,
    private actions: ProductActions,
    private router: Router,private modalService: BsModalService
  ) {
    this.taxonomies$ = this.store.select(getTaxonomies);
    this.store.dispatch(this.actions.getAllTaxonomies());
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'cat-mobile' })
    );
  }
  ngOnInit() {
    this.store.dispatch(this.authActions.authorize());
    this.store.dispatch(this.authActions.login());
    this.isAuthenticated = this.store.select(getAuthStatus);
    this.totalCartItems = this.store.select(getTotalCartItems);
    this.screenwidth = window.outerWidth;

    this.test()
  }

  test() {
    if (this.screenwidth <= 1000) {
      this.isScrolled = true;
      this.devicewidth = this.screenwidth
    }
  }
  selectTaxon(taxon) {
    this.router.navigateByUrl('/');
    this.store.dispatch(this.searchActions.addFilter(taxon));
  }


  updateHeader(evt) {
    if (this.screenwidth >= 1000) {
      this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
      if (this.currPos >= this.changePos) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    }
  }
}
