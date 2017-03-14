import { PaymentComponent } from './payment/payment.component';
import { AddressComponent } from './address/address.component';
import { CartComponent } from './cart/cart.component';

export const CheckoutRoutes = [
  { path: '', redirectTo: 'cart', pathMatch: 'full' },
  // { path: 'cart', loadChildren: './cart/cart.module#CartModule' }
  { path: 'cart', component: CartComponent }
  // { path: 'payment', component: PaymentComponent },
];
