import { FavoriteProductListItemComponent } from './components/favorite-products/favorite-product-list-item/favorite-product-list-item.component';
import { FavoriteProductsComponent } from './components/favorite-products/favorite-products.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';

// components
import { OverviewComponent } from './components/overview/overview.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderListItemComponent } from './components/orders/order-list-item/order-list-item.component';
import { ReturnsComponent } from './components/returns/returns.component';
import { ReturnListItemComponent } from './components/returns/return-list-item/return-list-item.component';
import { UserComponent } from './user.component';

// services
// import { UserService } from './services/user.service';

import { UserRoutes as routes } from './user.routes';
import { AddressesComponent } from './components/addresses/addresses.component';
import { SharedModule } from '../shared/index';
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileEmailComponent } from './components/profile/profile-email/profile-email.component';
import { ProfilePasswordComponent } from './components/profile/profile-password/profile-password.component';
import { AddEditAddressComponent } from './components/addresses/add-edit-address/add-edit-address.component';
import { AddressService } from '../checkout/address/services/address.service';
import { AddressModule } from '../checkout/address/address.module';

@NgModule({
  declarations: [
    // components
    OverviewComponent,
    OrderListItemComponent,
    OrdersComponent,
    ReturnsComponent,
    ReturnListItemComponent,
    UserComponent,
    AddressesComponent,
    OrderDetailComponent,
    FavoriteProductsComponent,
    FavoriteProductListItemComponent,
    ProfileComponent,
    ProfileEmailComponent,
    ProfilePasswordComponent,
    AddEditAddressComponent
    // pipes

  ],
  exports: [],
  providers: [
    AddressService,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    PaginationModule, AddressModule
  ]
})
export class UserModule { }
