import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AppState } from './../../../interfaces';
import {
  Component,
  OnInit,
  Input,
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
  @Input() showRating: boolean;

  constructor(private store: Store<AppState>, private router: ActivatedRoute) {}

  ngOnInit() {}

  getDeals() {}
}
