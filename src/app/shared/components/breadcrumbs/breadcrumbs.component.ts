import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: {crumb: string, link: string}[] = [
    {crumb: 'Home', link: '#'},
    {crumb: 'Category', link: '#'},
    {crumb: 'Data', link: '#'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
