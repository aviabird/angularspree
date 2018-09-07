import { ProductEffects } from '../product/effects/product.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { ModalModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { NgxInputStarRatingModule } from '@ngx-lite/input-star-rating';

// Components
import { SearchComponent } from './search.component';
import { BrandFilterComponent } from './components/sidebar/brand-filter/brand-filter.component';
import { CategoriesComponent } from './components/sidebar/categories/categories.component';
import { BreadcrumbComponent } from './components/breadcrumb/components/breadcrumb/breadcrumb.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
// Content components
import { ProductListComponent } from './components/content/product-list/product-list.component';
import { ProductListItemComponent } from './components/content/product-list/product-list-item/product-list-item.component';
import { FilterSummaryComponent } from './components/content/filter-summary/filter-summary.component';
import { CustomizeComponent } from './components/content/customize/customize.component';
import { ContentHeaderComponent } from './components/content/content-header/content-header.component';
import { ContentComponent } from './components/content/content';
// Sidebar components
import { TaxonsComponent } from './components/sidebar/taxons/taxons.component';
import { FilterComponent } from './components/sidebar/filter/filter.component';
import { FilterMobileMenuComponent } from './components/filter-mobile-menu/filter-mobile-menu.component'
// Routes
import { SearchRoutes as routes } from './search.routes';

import { FilterPipe } from './components/content/product-list/product-filter.pipe';
import * as fromSearch from './reducers/search.reducer';

@NgModule({
  declarations: [
    // components
    SearchComponent,
    ProductListComponent,
    ProductListItemComponent,
    TaxonsComponent,
    FilterComponent,
    BreadcrumbComponent,
    ContentHeaderComponent,
    CustomizeComponent,
    FilterSummaryComponent,
    ContentComponent,
    CategoriesComponent,
    BrandFilterComponent,
    FilterMobileMenuComponent,
    CategoryPageComponent,

    // pipes
    FilterPipe
  ],
  exports: [
  ],
  imports: [
    RouterModule.forChild(routes),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    NgxInputStarRatingModule,

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('search', fromSearch.reducer),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([ProductEffects]),

    SharedModule,
  ],
  providers: [
  ]
})
export class SearchModule { }
