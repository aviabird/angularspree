import { DragScrollDirective } from 'ngx-drag-scroll';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lp-favorites',
  templateUrl: './lp-favorites.component.html',
  styleUrls: ['./lp-favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LpFavoritesComponent implements OnInit {
  @Input() favoriteProducts;
  constructor() { }

  ngOnInit() {
  }
  
  @ViewChild('nav', { read: DragScrollDirective }) ds: DragScrollDirective;

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
}
