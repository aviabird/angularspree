import { ProductEffects } from './../product/effects/product.effects';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BrandFilterComponent } from './sidebar/brand-filter/brand-filter.component';
import { CategoriesComponent } from './sidebar/categories/categories.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductActions } from './../product/actions/product-actions';
import { SearchActions } from './reducers/search.actions';
import { SharedModule } from './../shared/index';
import { ModalModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { NgxInputStarRatingModule } from '@ngx-lite/input-star-rating';
// Components
import { HomeComponent } from './home.component';

// Content components
import { ProductListComponent } from './content/product-list/product-list.component';
import { ProductListItemComponent } from './content/product-list/product-list-item/product-list-item.component';
import { FilterSummaryComponent } from './content/filter-summary/filter-summary.component';
import { CustomizeComponent } from './content/customize/customize.component';
import { ContentHeaderComponent } from './content/content-header/content-header.component';
import { ContentComponent } from './content/content';
// Sidebar components
import { FilterMobileMenuComponent } from './filter-mobile-menu/filter-mobile-menu.component'
// Routes
import { HomeRoutes as routes } from './home.routes';

import { FilterPipe } from './content/product-list/product-filter.pipe';
import { reducers } from './reducers/index';
import { CategoryPageComponent } from './category-page/category-page.component';
@NgModule({
  declarations: [
    // components
    HomeComponent,
    ProductListComponent,
    ProductListItemComponent,
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
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    NgxInputStarRatingModule,

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('home', reducers),

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
    ProductActions,
    SearchActions
  ]
})
export class HomeModule { }
