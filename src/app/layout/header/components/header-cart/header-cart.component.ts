import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss']
})
export class HeaderCartComponent implements OnInit {
  @Input() totalCartItems: number;
  @Input() devicewidth;
  constructor() { }
  ngOnInit() {

  }

}
