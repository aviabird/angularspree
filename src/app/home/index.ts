import { SharedModule } from './../shared/index';
import { ProductActions } from './../product/actions/product-actions';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { HomeComponent } from './home.component';
import { ProductListComponent } from './product-list/components/product-list/product-list.component';
import { ProductListItemComponent } from './product-list/components/product-list-item/product-list-item.component';
import { BreadcrumbComponent } from './breadcrumb/components/breadcrumb/breadcrumb.component';
import { TaxonsComponent } from './sidebar/taxons/taxons.component';
import { FilterComponent } from './sidebar/filter/filter.component';
// Routes
import { HomeRoutes as routes } from './home.routes';

@NgModule({
  declarations: [
    // components
    HomeComponent,
    ProductListComponent,
    ProductListItemComponent,
    TaxonsComponent,
    FilterComponent,
    BreadcrumbComponent
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
