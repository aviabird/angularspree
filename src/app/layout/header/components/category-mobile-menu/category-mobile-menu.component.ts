import { Component, OnInit, Output, Input, ChangeDetectionStrategy, PLATFORM_ID, Inject } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ElementRef, EventEmitter } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-category-mobile-menu',
  templateUrl: './category-mobile-menu.component.html',
  styleUrls: ['./category-mobile-menu.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        left: -100 + 'vw'
      })),
      state('hide', style({
        left: 0
      })),
      transition('show => hide', animate('100ms ease-out')),
      transition('hide => show', animate('200ms ease-in'))
    ]),
    trigger('subCatgory', [
      state('show', style({
        left: -200 + 'vw'
      })),
      state('hide', style({
        left: -100
      })),
      transition('show => hide', animate('100ms ease-out')),
      transition('hide => show', animate('200ms ease-in'))
    ])

  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryMobileMenuComponent implements OnInit {
  @Output() onSubCatClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() taxonomies;
  @Input() isScrolled;
  @Input() screenwidth;
  subChild: any;
  dropdownWidth: any;
  menuTaxons: any;
  autoclose: boolean;
  queryParams: any;
  showParrent = false;
  showChild = false;
  backBtnShow = false;
  contactno = environment.config.contact_info.contact_no;

  constructor(private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object) { }

  showCategory(i) {
    this.menuTaxons = this.taxonomies[0].root.taxons[i];
    this.showParrent = !this.showParrent;
  }

  get getparrentState() {
    return this.showParrent ? 'show' : 'hide'
  }

  get getChildState() {
    return this.showChild ? 'show' : 'hide'
  }

  showSubCategory(i) {
    this.showChild = !this.showChild;
    this.subChild = this.menuTaxons.taxons[i];
  }

  parrantBack() {
    this.showParrent = !this.showParrent;
  }

  childBack() {
    this.showChild = !this.showChild;
  }

  onCloseMobilemenu(taxonName: string) {
    this.onSubCatClicked.emit(false);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('keyword', taxonName);
    }
  }

  ngOnInit() {
  }
}
