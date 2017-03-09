import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccordionModule } from 'primeng/primeng';     // accordion and accordion tab
import { MenuItem } from 'primeng/primeng';            // api
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
// Routes
import { routes } from './app.routes';
// Modules
import { SharedModule } from './shared/index';
import { UserModule } from './user/index';
import { LayoutModule } from './layout/index';
import { HomeModule } from './home/index';
import { CartModule } from './cart/index';
import { ProductModule } from './product/index';
import { CoreModule } from './core/index';

// AppState

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    CartModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
