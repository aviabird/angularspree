import { OverviewComponent } from './components/overview/overview.component';
import { UserComponent } from './user.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { OrderDetailComponent } from './components/orders/order-detail/order-detail.component';

export const UserRoutes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'orders' },
      { path: 'overview', component: OverviewComponent, redirectTo: 'orders' },
      { path: 'orders', component: OrdersComponent },
      { path: 'orders/detail/:number', component: OrderDetailComponent },
      { path: 'addresses', component: AddressesComponent, redirectTo: 'orders' }
    ]
  },
];
