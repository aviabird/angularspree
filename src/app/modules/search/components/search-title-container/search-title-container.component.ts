import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-title-container',
  templateUrl: './search-title-container.component.html',
  styleUrls: ['./search-title-container.component.scss']
})
export class SearchTitleContainerComponent implements OnInit {
  @Input() title = 'Placeholder';
  @Input() metaInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
