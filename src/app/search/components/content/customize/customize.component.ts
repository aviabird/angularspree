import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomizeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
