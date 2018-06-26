import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header-help-dropdown',
  templateUrl: './header-help-dropdown.component.html',
  styleUrls: ['./header-help-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderHelpDropdownComponent implements OnInit {
  isOpen: boolean;
  constructor() { }


  ngOnInit() {
  }

  onOpenChange(data: boolean): void {

    this.isOpen = !this.isOpen;
  }
}
