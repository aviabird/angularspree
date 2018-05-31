import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastyModule } from 'ng2-toasty';
import { DragScrollModule } from 'ngx-drag-scroll';

// Pipes
import { KeysPipe } from './pipes/keys.pipe';
import { HumanizePipe } from '../core/pipes/humanize.pipe';

// components
// imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ProductSlider} from './components/product-slider/product-slider.component'
import {InnerIproduct} from './components/product-slider/inner-product/inner-product.component'
// Directives
import { ZoomableDirective } from './directives/zoomable.directive';

@NgModule({
  declarations: [
    // components
    // pipes
    KeysPipe,
    HumanizePipe,
    ZoomableDirective,
    ProductSlider,
    InnerIproduct
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
    ToastyModule,
    DragScrollModule,
    ZoomableDirective,
    ProductSlider
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastyModule.forRoot(),
    DragScrollModule
  ]
})
export class SharedModule {}
