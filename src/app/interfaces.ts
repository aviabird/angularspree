import { ProductState } from './product/reducers/product-state';
import { AuthState } from './auth/reducers/auth.state';
import { UserState } from './user/reducers/user.state';
import { CheckoutState } from './checkout/reducers/checkout.state';
import { CartState } from './checkout/cart/reducers/cart-state';
import { SearchState } from './home/reducers/search.state';

// This should hold the AppState interface
// Ideally importing all the substate for the application

export interface AppState {
  products: ProductState;
  auth: AuthState;
  checkout: CheckoutState;
  users: UserState;
  cart: CartState;
  search: SearchState;
}
