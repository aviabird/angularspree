import { ProductState } from './product/reducers/product-state';
import { AuthState } from './auth/reducers/auth.state';
import { UserState } from './user/reducers/user.state';
import { CheckoutState } from './checkout/reducers/checkout.state';

// This should hold the AppState interface
// Ideally importing all the substate for the application

/**
 *
 *
 * @export
 * @interface AppState
 */
export interface AppState {
  products: ProductState;
  auth: AuthState;
  checkout: CheckoutState;
  users: UserState;
}
