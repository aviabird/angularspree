import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
  @Input() taxons;

  constructor() { }
  ngOnInit() {
  }

}
