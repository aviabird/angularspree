import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartActions } from './actions/cart-actions';
import { NgModule } from '@angular/core';

import { LineItemListComponent } from './components/line-item-list/line-item-list.component';
import { LineItemComponent } from './components/line-item-list/line-item/line-item.component';

@NgModule({
  declarations: [
    CartComponent,
    LineItemListComponent,
    LineItemComponent
  ],
  exports: [],
  imports: [
    CommonModule,
  ],
  providers: [
    CartActions
  ]
})
export class CartModule { }
