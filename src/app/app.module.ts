import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';



// Components
import { AppComponent } from './app.component';
// Routes
import { routes } from './app.routes';
// Modules
import { SharedModule } from './shared/index';
import { HomeModule } from './home/index';
import { LayoutModule } from './layout/index';
import { CoreModule } from './core/index';
import { StoreModule } from '@ngrx/store';
import { reducer } from './app.reducers';
import { CheckoutHeaderComponent } from './layout/checkout-header/checkout-header.component';
import { CheckoutFooterComponent } from './layout/checkout-footer/checkout-footer.component';

// adding rx operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/of';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    CheckoutHeaderComponent,
    CheckoutFooterComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.provideStore(reducer),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HomeModule,
    LayoutModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
