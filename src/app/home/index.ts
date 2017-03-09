import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list/product-list-item/product-list-item.component';
import { TaxonComponent } from './taxon/taxon.component';
import { HomeComponent } from './home.component';

import { HomeRoutes as routes } from './home.routes';

export { HomeState } from './reducers/home-state';

@NgModule({
  declarations: [
    // components
    ProductListComponent,
    ProductListItemComponent,
    TaxonComponent,
    HomeComponent,
    // pipes
  ],
  exports: [
    // components
    // ProductListComponent,
    // ProductListItemComponent,
    // TaxonComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class HomeModule {}
