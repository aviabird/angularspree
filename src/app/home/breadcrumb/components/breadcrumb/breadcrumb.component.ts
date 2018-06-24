import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent implements OnInit {
  @Input() taxonomies;
  // breadcrumbs: string[] = ['Home', 'Clothing', 'Shirts', 'Men Casual Shirts']
  breadcrumbs: string[] = ['Home', 'Categories'];

  constructor() { }

  ngOnInit() {
  }

}
