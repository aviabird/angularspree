import { APP_DATA } from './../../../shared/data/app-data';
import { DragScrollDirective } from 'ngx-drag-scroll';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lp-videos',
  templateUrl: './lp-videos.component.html',
  styleUrls: ['./lp-videos.component.scss']
})
export class LpVideosComponent implements OnInit {
  videos = APP_DATA.videos;
  constructor() {
   }

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
