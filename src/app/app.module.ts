import { ProductEffects } from './product/effects/product.effects';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
// Routes
import { routes } from './app.routes';
// Modules
import { SharedModule } from './shared/index';
import { UserModule } from './user/index';
import { HomeModule } from './home/index';
import { LayoutModule } from './layout/index';
import { CheckoutModule } from './checkout/checkout.module';
import { ProductModule } from './product/index';
import { CoreModule } from './core/index';
import { StoreModule } from '@ngrx/store';
import { reducer } from './app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PaymentModesListComponent } from './checkouts/payment/payment-modes-list/payment-modes-list.component';
import { PaymentModeComponent } from './checkouts/payment/payment-modes-list/payment-mode/payment-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentModesListComponent,
    PaymentModeComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    LayoutModule,
    CheckoutModule,
    CoreModule,
    EffectsModule.run(ProductEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
