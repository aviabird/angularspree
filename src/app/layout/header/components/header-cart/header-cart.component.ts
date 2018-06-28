import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderCartComponent implements OnInit {
  @Input() totalCartItems: number;
  @Input() isMobile;
  constructor() { }
  ngOnInit() {

  }

}
