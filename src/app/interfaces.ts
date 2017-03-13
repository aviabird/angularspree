import { ProductState } from './product/reducers/product-state';
import { AuthState } from './auth/reducers/auth.state';

// This should hold the AppState interface
// Ideally importing all the substate for the application

export interface AppState {
  products: ProductState;
  authState: AuthState;
}
