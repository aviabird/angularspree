import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// components
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';

// imports
import { DropdownModule } from 'ng2-bootstrap/dropdown';

@NgModule({
  declarations: [
    // components
    LoadingIndicatorComponent,
    // pipes

  ],
  exports: [
    // components
    LoadingIndicatorComponent,

    // modules
    CommonModule,
    DropdownModule

    // pipes

  ],
  imports: [
    CommonModule,
    DropdownModule.forRoot()
  ]
})
export class SharedModule {}
