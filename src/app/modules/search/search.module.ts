import { NgxInputStarRatingModule } from '@ngx-lite/input-star-rating';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from './../../shared/index';

import { COMPONENTS } from './';

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NgxInputStarRatingModule,

    SharedModule
  ]
})
export class SearchModule { }
