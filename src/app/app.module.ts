import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule } from 'primeng/primeng';     // accordion and accordion tab
import { MenuItem } from 'primeng/primeng';            // api

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { TaxonComponent } from './home/taxon/taxon.component';
import { ProductListComponent } from './home/product-list/product-list.component';
import { ProductListItemComponent } from './home/product-list/product-list-item/product-list-item.component';
import { OrdersComponent } from './user/orders/orders.component';
import { ReturnsComponent } from './user/returns/returns.component';
import { OrderListItemComponent } from './user/orders/order-list-item/order-list-item.component';
import { ReturnListItemComponent } from './user/returns/return-list-item/return-list-item.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { LineItemComponent } from './cart/line-item/line-item.component';
import { OverviewComponent } from './user/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ProductComponent,
    TaxonComponent,
    ProductListComponent,
    ProductListItemComponent,
    OrdersComponent,
    ReturnsComponent,
    OrderListItemComponent,
    ReturnListItemComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    CartComponent,
    LineItemComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
