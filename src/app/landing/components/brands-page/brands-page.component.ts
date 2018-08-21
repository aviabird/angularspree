import { Taxonomy } from './../../../core/models/taxonomy';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-brands-page',
  templateUrl: './brands-page.component.html',
  styleUrls: ['./brands-page.component.scss']
})
export class BrandsPageComponent implements OnInit {
  public brands$: Observable<Taxonomy[]>;

  constructor(  private productService: ProductService) {
    this.brands$ = this.productService.getTaxonByName('Brands');
   }

  ngOnInit() {
  }

}
