import { NgModule } from '@angular/core';
import { ProductDummyService } from './services/product-dummy.service';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';

// Components

// Services
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http';


export function httpInterceptor(
  backend: XHRBackend,
  defaultOptions: RequestOptions,
) {
  return new HttpService(backend, defaultOptions);
}

@NgModule({
  declarations: [
    // components
    // DummyService,
    // pipes
  ],
  exports: [
    // components
    // DummyService
  ],
  imports: [
    DropdownModule.forRoot()
  ],
  providers: [
    AuthService,
    {
      provide: HttpService,
      useFactory: httpInterceptor,
      deps: [ XHRBackend, RequestOptions]
    },
    ProductDummyService
  ]
})
export class CoreModule {}
