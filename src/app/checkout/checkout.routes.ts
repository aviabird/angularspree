import { OrderSuccessComponent } from './order-success/order-success.component';
import { PaymentComponent } from './payment/payment.component';
import { AddressComponent } from './address/address.component';
import { CartComponent } from './cart/cart.component';

export const CheckoutRoutes = [
  { path: '', redirectTo: 'cart', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'address', component: AddressComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'order-success', component: OrderSuccessComponent }
];
