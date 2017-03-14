import { SharedModule } from './../shared/index';
import { ProductActions } from './../product/actions/product-actions';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list/product-list-item/product-list-item.component';
import { HomeComponent } from './home.component';

import { HomeRoutes as routes } from './home.routes';

@NgModule({
  declarations: [
    // components
    ProductListComponent,
    ProductListItemComponent,
    HomeComponent,
    // pipes
  ],
  exports: [
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [
    ProductActions
  ]
})
export class HomeModule {}
