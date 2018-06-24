import { NgxInputStarRatingModule } from '@ngx-lite/input-star-rating';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DragScrollModule } from 'ngx-drag-scroll';

// Pipes
import { KeysPipe } from './pipes/keys.pipe';
import { HumanizePipe } from '../core/pipes/humanize.pipe';

// components
// imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductSliderComponent } from './components/product-slider/product-slider.component'
import { InnerIproductComponent } from './components/product-slider/inner-product/inner-product.component'
// Directives
import { ZoomableDirective } from './directives/zoomable.directive';

@NgModule({
  declarations: [
    // components
    // pipes
    KeysPipe,
    HumanizePipe,
    ZoomableDirective,
    ProductSliderComponent,
    InnerIproductComponent,
  ],
  exports: [
    // components
    // modules
    CommonModule,
    BsDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    // pipes
    KeysPipe,
    HumanizePipe,
    DragScrollModule,
    ZoomableDirective,
    ProductSliderComponent,
    DragScrollModule
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    DragScrollModule,
    RouterModule,
    NgxInputStarRatingModule
  ]
})
export class SharedModule { }
