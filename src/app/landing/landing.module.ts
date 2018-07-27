import { SharedModule } from './../shared/index';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LpPromoComponent } from './lp-promo/lp-promo.component';
import { PlItemComponent } from './lp-product-list/pl-item/pl-item.component';
import { LpProductListComponent } from './lp-product-list/lp-product-list.component';
import { LpBrandsComponent } from './lp-brands/lp-brands.component';
import { LpBannerComponent } from './lp-banner/lp-banner.component';
import { LandingComponent } from './landing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { BrandsPageComponent } from './brands-page/brands-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { ReturnPolicyComponent } from './return-policy/return-policy.component';

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
    SharedModule
  ],
  declarations: [...COMPONENTS]
})

export class LandingModule { }
