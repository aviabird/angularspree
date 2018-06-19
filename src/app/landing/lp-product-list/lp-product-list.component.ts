import { SearchActions } from './../../home/reducers/search.actions';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AppState } from './../../interfaces';
import { DragScrollDirective } from 'ngx-drag-scroll';
import { environment } from './../../../environments/environment';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-lp-product-list',
  templateUrl: './lp-product-list.component.html',
  styleUrls: ['./lp-product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LpProductListComponent implements OnInit {
  @Input() products;
  @Input() dealsType;
  @Input() dealsId;
  @ViewChild('nav', { read: DragScrollDirective })
  ds: DragScrollDirective;

  constructor(
    private searchActions: SearchActions,
    private store: Store<AppState>,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {}

  moveLeft() {
    this.ds.moveLeft();
  }
  moveRight() {
    this.ds.moveRight();
  }

  getDeals() {
    const search = new URLSearchParams();
    search.set('id', this.dealsId);
    this.store.dispatch(
      this.searchActions.getProducsByTaxon(search.toString())
    );
  }
}
