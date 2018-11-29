import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-title-count',
  templateUrl: './search-title-count.component.html',
  styleUrls: ['./search-title-count.component.scss']
})
export class SearchTitleCountComponent implements OnInit {
  @Input() count = 0;

  constructor() { }

  ngOnInit() {}

  get itemOrItems() { return this.count > 1 ? 'items' : 'item'; }

}
