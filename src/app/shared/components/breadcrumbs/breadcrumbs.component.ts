import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() breadcrumbs: {crumb: string, link: string}[] = [
    {crumb: 'This', link: '#'},
    {crumb: 'is', link: '#'},
    {crumb: 'Placehoder', link: '#'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
