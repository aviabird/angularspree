import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {
  values = '';
  constructor() { }

  ngOnInit() {
  }
  onSearch(keyword: string) {
    console.log(keyword);
  }
}
