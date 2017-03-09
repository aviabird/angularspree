import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { CartComponent } from './cart.component';
import { LineItemComponent } from './components/line-item/line-item.component';
import { CartRoutes as routes } from './cart.routes';


@NgModule({
  declarations: [
    // components
    LineItemComponent,
    CartComponent,
    // pipes
  ],
  exports: [
    // components
  ],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class CartModule {}
