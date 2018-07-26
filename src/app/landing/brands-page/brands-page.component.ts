import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-brands-page',
  templateUrl: './brands-page.component.html',
  styleUrls: ['./brands-page.component.scss']
})
export class BrandsPageComponent implements OnInit {
 brands: any;
  constructor(  private productService: ProductService) {

    this.brands = this.productService.getTaxonByName('Brands')
    .subscribe(data => {
      this.brands = data
    })

   }

  ngOnInit() {
  }

}
