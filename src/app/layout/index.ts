import { FooterQuickLinksComponent } from './footer/component/footer-quick-links/footer-quick-links.component';
import { FooterSocialLinksComponent } from './footer/component/footer-social-links/footer-social-links.component';
import { FooterContactInfoComponent } from './footer/component/footer-contact-info/footer-contact-info.component';

// tslint:disable-next-line:max-line-length
import { BrandLogoComponent } from './header/components/categories-menu-dropdown/categories-components/categories-details/brand-logo/brand-logo.component';
import { BrandListComponent } from './header/components/brand-menu-dropdown/brand-componant/brand-list/brand-list.component';
// tslint:disable-next-line:max-line-length
import { CategoriesListComponent } from './header/components/categories-menu-dropdown/categories-components/categories-details/categories-list/categories-list.component';
// tslint:disable-next-line:max-line-length
import { CategoriesDetailsComponent } from './header/components/categories-menu-dropdown/categories-components/categories-details/categories-details.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BrandMenuDropdownComponent } from './header/components/brand-menu-dropdown/brand-menu-dropdown.component';
import { CategoriesMenuDropdownComponent } from './header/components/categories-menu-dropdown/categories-menu-dropdown.component';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';

// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileDropdownComponent } from './header/components/profile-dropdown/profile-dropdown.component';
import { HeaderSearchComponent } from './header/components/header-search/header-search.component';
import { HeaderCartComponent } from './header/components/header-cart/header-cart.component';
import { HeaderHelpDropdownComponent } from './header/components/header-help-dropdown/header-help-dropdown.component';
import { CategoryMobileMenuComponent } from './header/components/category-mobile-menu/category-mobile-menu.component'
// Modules
import { SharedModule } from '../shared/index';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromLayout from './reducers/layout.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LayoutEffects } from './effects/layout.effects';

@NgModule({
  declarations: [
    // components
    HeaderComponent,
    HeaderSearchComponent,
    HeaderCartComponent,
    HeaderHelpDropdownComponent,
    FooterComponent,
    CategoriesMenuDropdownComponent,
    BrandMenuDropdownComponent,
    CategoriesDetailsComponent,
    CategoriesListComponent,
    BrandListComponent,
    BrandLogoComponent,
    FooterContactInfoComponent,
    FooterSocialLinksComponent,
    FooterQuickLinksComponent,
    CategoryMobileMenuComponent,
    // sub components
    ProfileDropdownComponent

    // pipes
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    StoreModule.forFeature('layout', fromLayout.reducer),
    EffectsModule.forFeature([LayoutEffects])
  ]
})
export class LayoutModule { }
