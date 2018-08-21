import { ProductResolver } from './guards/product-resolver';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/index';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar'
import { NgxInputStarRatingModule } from '@ngx-lite/input-star-rating';
import { ProductRoutingModule } from './product-routing.module';

// Components
import { ProductDetailPageComponent } from './components/product-detail-page/product-detail-page.component';
import { ProductDetailsComponent } from './components/product-detail-page/product-details/product-details.component';
import { ProductDescriptionComponent } from './components/product-detail-page/product-description/product-description.component';
import { ProductImagesComponent } from './components/product-detail-page/product-images/product-images.component';
import { ProductPriceInfoComponent } from './components/product-detail-page/product-price-info/product-price-info.component';
import { ProductCountComponent } from './components/product-detail-page/product-price-info/product-count/product-count.component';
import { ProductVariantsComponent } from './components/product-detail-page/product-variants/product-variants.component';
import { ProductComponent } from './product.component';
import { WriteProductReviewComponent } from './components/product-detail-page/write-product-review/write-product-review.component';
import { ProductReviewComponent } from './components/product-detail-page/product-review/product-review.component'
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { CheckPincodeComponent } from './components/product-detail-page/product-price-info/check-pincode/check-pincode.component';


@NgModule({
  declarations: [
    // components
    ProductDetailPageComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductImagesComponent,
    ProductPriceInfoComponent,
    ProductDescriptionComponent,
    ProductVariantsComponent,
    ProductCountComponent,
    WriteProductReviewComponent,
    ProductReviewComponent,
    CheckPincodeComponent
    // pipes
  ],
  exports: [
    // components
    ProductDetailPageComponent,
    ProductDetailsComponent,
    ProductImagesComponent,
    ProductPriceInfoComponent,
    ProductDescriptionComponent,
    ProductVariantsComponent,
    ProductCountComponent
  ],
  imports: [
    SharedModule,
    RoundProgressModule,
    ProductRoutingModule,
    NgxInputStarRatingModule,
    ProgressbarModule.forRoot()
  ],
  providers: [
    ProductResolver
  ]
})
export class ProductModule { }
