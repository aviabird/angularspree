import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routes';
import { NgModule } from '@angular/core';

// components
import { OverviewComponent } from './overview/overview.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListItemComponent } from './orders/order-list-item/order-list-item.component';
import { ReturnsComponent } from './returns/returns.component';
import { ReturnListItemComponent } from './returns/return-list-item/return-list-item.component';
import { UserComponent } from './user.component';

import { UserRoutes as routes } from './user.routes';

@NgModule({
  declarations: [
    // components
    OverviewComponent,
    OrderListItemComponent,
    OrdersComponent,
    ReturnsComponent,
    ReturnListItemComponent,
    UserComponent
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
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class UserModule {}
