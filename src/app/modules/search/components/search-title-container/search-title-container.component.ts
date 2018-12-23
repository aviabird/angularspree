import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-title-container',
  templateUrl: './search-title-container.component.html',
  styleUrls: ['./search-title-container.component.scss']
})
export class SearchTitleContainerComponent implements OnInit {
  @Input() title: String = 'T-shirts For Men & Women';
  @Input() count: Number = 0;

  constructor() { }

  ngOnInit() {
  }

}
