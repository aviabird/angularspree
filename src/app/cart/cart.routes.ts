import { CartComponent } from './cart.component';

export const CartRoutes = [
	{ path: '', redirectTo: 'cart', pathMatch: 'full' },
	{ path: 'cart', component: CartComponent },
]