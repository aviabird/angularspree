import { NgModule } from '@angular/core';

// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileDropdownComponent } from './header/components/profile-dropdown/profile-dropdown.component';
import { HeaderSearchComponent } from './header/components/header-search/header-search.component';
import { HeaderCartComponent } from './header/components/header-cart/header-cart.component';
import { HeaderHelpDropdownComponent } from './header/components/header-help-dropdown/header-help-dropdown.component';

// Modules
import { SharedModule } from '../shared/index';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // components
    HeaderComponent,
    HeaderSearchComponent,
    HeaderCartComponent,
    HeaderHelpDropdownComponent,
    FooterComponent,

    // sub components
    ProfileDropdownComponent

    // pipes
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule {}
