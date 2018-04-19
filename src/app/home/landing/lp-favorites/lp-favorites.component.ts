import { DragScrollDirective } from 'ngx-drag-scroll';
import { environment } from './../../../../environments/environment.mock';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lp-favorites',
  templateUrl: './lp-favorites.component.html',
  styleUrls: ['./lp-favorites.component.scss']
})
export class LpFavoritesComponent implements OnInit {
  @Input() products;
  constructor() { }

  ngOnInit() {
  }
  getProductImageUrl(url) {
    return environment.API_ENDPOINT + url;
  }
  @ViewChild('nav', { read: DragScrollDirective }) ds: DragScrollDirective;

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
}
