import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Brand } from '../../../core/models/brand';
import { Store } from '@ngrx/store';
import { AppState } from '../../../interfaces';
import { getBrands } from '../../../product/reducers/selectors';

@Component({
  selector: 'app-brands-page',
  templateUrl: './brands-page.component.html',
  styleUrls: ['./brands-page.component.scss']
})
export class BrandsPageComponent implements OnInit {
  brands$: Observable<Array<Brand>>;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.brands$ = this.store.select(getBrands);
  }

}
