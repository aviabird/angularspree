import { SearchResolver } from './guards/search-resolver';
import { NgxInputStarRatingModule } from '@ngx-lite/input-star-rating';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from './../../shared/index';

import { COMPONENTS } from './';
import { StoreModule } from '@ngrx/store';
import * as fromSearch from './store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NgxInputStarRatingModule,

    SharedModule,

    NgxSliderModule,

    StoreModule.forFeature('search', fromSearch.reducer),

    EffectsModule.forFeature([fromSearch.SearchEffects])
  ],
  providers: [SearchResolver]
})
export class SearchModule {}
