import { NgModule } from '@angular/core';

// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // components
    HeaderComponent,
    FooterComponent,
    // pipes
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule {}
