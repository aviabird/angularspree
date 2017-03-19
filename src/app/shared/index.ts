import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// components
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';

// imports
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HumanizePipe } from '../core/pipes/humanize.pipe';

@NgModule({
  declarations: [
    // components
    LoadingIndicatorComponent,
    // pipes
    HumanizePipe

  ],
  exports: [
    // components
    LoadingIndicatorComponent,

    // modules
    CommonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,

    // pipes
    HumanizePipe

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DropdownModule.forRoot()
  ]
})
export class SharedModule {}
