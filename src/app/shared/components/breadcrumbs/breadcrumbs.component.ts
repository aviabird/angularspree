import { Component, OnInit, Input } from '@angular/core';

const DefaultCrumb = [
  { crumb: 'Home', link: '/' },
];

interface BreadCrumb {
  crumb: string;
  link: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  _breadcrumbs: Array<BreadCrumb> = [];

  get breadcrumbs(): Array<BreadCrumb> {
    return [...DefaultCrumb, ...this._breadcrumbs];
  }

  @Input('breadcrumbs')
  set breadcrumbs(value: Array<BreadCrumb>) {
    this._breadcrumbs = value || [];
  }

  constructor() { }

  ngOnInit() {
  }

}
