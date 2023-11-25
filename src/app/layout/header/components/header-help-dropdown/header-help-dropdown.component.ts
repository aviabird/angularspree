import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from './../../../../../environments/environment';

@Component({
  selector: 'app-header-help-dropdown',
  templateUrl: './header-help-dropdown.component.html',
  
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderHelpDropdownComponent implements OnInit {
  isOpen: boolean;
  contactno = environment.config.contact_info.contact_no;
  constructor() {}

  ngOnInit() {}

  onOpenChange(data: boolean): void {
    this.isOpen = !this.isOpen;
  }
}
