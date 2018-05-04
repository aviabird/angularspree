import { DragScrollDirective } from 'ngx-drag-scroll';
import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lp-top-rated',
  templateUrl: './lp-top-rated.component.html',
  styleUrls: ['./lp-top-rated.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LpTopRatedComponent implements OnInit {

  @Input() topRatedBrands;

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  @ViewChild('nav', { read: DragScrollDirective }) ds: DragScrollDirective;

  moveLeft() { this.ds.moveLeft() }
  moveRight() { this.ds.moveRight() }

}
