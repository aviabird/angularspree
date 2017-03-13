import { ProductState } from './product/reducers/product-state';

// This should hold the AppState interface
// Ideally importing all the substate for the application

export interface AppState {
  products: ProductState;
}
