import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule } from 'primeng/primeng';     // accordion and accordion tab
import { MenuItem } from 'primeng/primeng';            // api
import { RouterModule } from '@angular/router';
import { RestangularModule } from 'ng2-restangular';
import { RestangularConfigFactory } from './rest-angular-config';

// Components
import { AppComponent } from './app.component';
// Routes
import { routes } from './app.routes';
// Modules
import { SharedModule } from './shared/index';
import { UserModule } from './user/index';
import { HomeModule } from './home/index';
import { LayoutModule } from './layout/index';
import { CartModule } from './cart/index';
import { ProductModule } from './product/index';
import { CoreModule } from './core/index';
import { StoreModule } from "@ngrx/store";
import { reducer } from './app.state';
// AppState

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducer),
    // Importing RestangularModule and making default configs for restanglar
    RestangularModule.forRoot(RestangularConfigFactory),
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    LayoutModule,
    CartModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
