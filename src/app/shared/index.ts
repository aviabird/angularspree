import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// components
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';

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

    // pipes
    
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {}
