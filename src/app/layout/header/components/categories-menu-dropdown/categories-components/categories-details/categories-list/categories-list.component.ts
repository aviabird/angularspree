import { Component, OnInit, Input, ChangeDetectionStrategy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListComponent implements OnInit {
  @Input() taxons;
  @Input() screenwidth

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
  }

  getTaxonName(taxonName: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('keyword', taxonName);
    }
  }
}
