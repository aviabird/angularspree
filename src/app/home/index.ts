import { DragScrollModule } from 'ngx-drag-scroll';
import { LpPromoComponent } from './landing/lp-promo/lp-promo.component';
import { PlFavItemComponent } from './landing/lp-favorites/pl-fav-item/pl-fav-item.component';
import { PlItemComponent } from './landing/lp-product-list/pl-item/pl-item.component';
import { LpVideosComponent } from './landing/lp-videos/lp-videos.component';
import { LpBrandsComponent } from './landing/lp-brands/lp-brands.component';
import { LpFavoritesComponent } from './landing/lp-favorites/lp-favorites.component';
import { LpProductListComponent } from './landing/lp-product-list/lp-product-list.component';
import { LpBannerComponent } from './landing/lp-banner/lp-banner.component';
import { LandingComponent } from './landing/landing.component';
import { ProductEffects } from './../product/effects/product.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductActions } from './../product/actions/product-actions';
import { SearchActions } from './reducers/search.actions';
import { SharedModule } from './../shared/index';
import { CarouselModule } from 'ngx-bootstrap/carousel';


// Components
import { HomeComponent } from './home.component';
// Breadcrumb components
import { BreadcrumbComponent } from './breadcrumb/components/breadcrumb/breadcrumb.component';

// Content components
import { ProductListComponent } from './content/product-list/product-list.component';
import { ProductListItemComponent } from './content/product-list/product-list-item/product-list-item.component';
import { FilterSummaryComponent } from './content/filter-summary/filter-summary.component';
import { CustomizeComponent } from './content/customize/customize.component';
import { ContentHeaderComponent } from './content/content-header/content-header.component';
import { ContentComponent } from './content/content';
// Sidebar components
import { TaxonsComponent } from './sidebar/taxons/taxons.component';
import { FilterComponent } from './sidebar/filter/filter.component';
// Routes
import { HomeRoutes as routes } from './home.routes';

import { FilterPipe } from './content/product-list/product-filter.pipe';
import { reducers } from './reducers/index';
@NgModule({
  declarations: [
    // components
    HomeComponent,
    ProductListComponent,
    ProductListItemComponent,
    TaxonsComponent,
    FilterComponent,
    BreadcrumbComponent,
    ContentHeaderComponent,
    CustomizeComponent,
    FilterSummaryComponent,
    ContentComponent,
    LandingComponent,
    LpBannerComponent,
    LpProductListComponent,
    LpFavoritesComponent,
    LpBrandsComponent,
    LpVideosComponent,
    PlItemComponent,
    PlFavItemComponent,
    LpPromoComponent,
    // pipes
    FilterPipe
  ],
  exports: [
  ],
  imports: [
    RouterModule.forChild(routes),
    CarouselModule,
    DragScrollModule,

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
export class HomeModule {}
