import { CheckoutState } from './checkout/reducers/cart-state';
import { ProductState } from './product/reducers/product-state';
import { AuthState } from './auth/reducers/auth.state';

// This should hold the AppState interface
// Ideally importing all the substate for the application

export interface AppState {
  products: ProductState;
  auth: AuthState;
  checkout: CheckoutState;
}
