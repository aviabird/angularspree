import { NgModule } from '@angular/core';

// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    // components
    HeaderComponent,
    FooterComponent,
    // pipes
    
  ],
  exports: [
    // components
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
  ]
})
export class LayoutModule {}
