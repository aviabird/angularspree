import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToastyModule } from 'ng2-toasty';

// Pipes
import { KeysPipe } from './pipes/keys.pipe';
import { HumanizePipe } from '../core/pipes/humanize.pipe';

// components
// imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // components
    // pipes
    KeysPipe,
    HumanizePipe
  ],
  exports: [
    // components
    // modules
    CommonModule,
    BsDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    // pipes
    KeysPipe,
    HumanizePipe,
    ToastyModule
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastyModule.forRoot(),
  ]
})
export class SharedModule {}
