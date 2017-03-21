import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routes';
import { NgModule } from '@angular/core';

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
    OrderDetailComponent
    // pipes

  ],
  exports: [
    // components
    // OverviewComponent,
    // OrderListItemComponent,
    // OrdersComponent,
    // ReturnsComponent,
    // ReturnListItemComponent,

  ],
  providers: [
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class UserModule {}
