import { SharedModule } from './../shared/index';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LpPromoComponent } from './components/lp-promo/lp-promo.component';
import { PlItemComponent } from './components/lp-product-list/pl-item/pl-item.component';
import { LpProductListComponent } from './components/lp-product-list/lp-product-list.component';
import { LpBrandsComponent } from './components/lp-brands/lp-brands.component';
import { LpBannerComponent } from './components/lp-banner/lp-banner.component';
import { LandingComponent } from './landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { BrandsPageComponent } from './components/brands-page/brands-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { ReturnPolicyComponent } from './components/return-policy/return-policy.component';
import { NgxInputStarRatingModule } from '@ngx-lite/input-star-rating';

const COMPONENTS = [
  LandingComponent,
  LpBannerComponent,
  LpBrandsComponent,
  LpProductListComponent,
  PlItemComponent,
  LpPromoComponent,
  BrandsPageComponent,
  ReturnPolicyComponent,
  FaqPageComponent,
  AboutUsComponent
];

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    CarouselModule,
    SharedModule,
    NgxInputStarRatingModule
  ],
  declarations: [...COMPONENTS]
})

export class LandingModule { }
