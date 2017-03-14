import { Product } from './../../../core/models/product';
import { ProductService } from './../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {
  actionsSubscription: Subscription;
  product: Observable<Product>;
  routeSubs: Subscription;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { };

  ngOnInit() {
    this.actionsSubscription = this.route.params.subscribe(
      (params: any) => {
        alert('Product id is `${params[:id]}`');
        // this.projectId = params['id'];
        // this.store.dispatch(this.projectActions.selectProject(this.projectId)); 
      }
    );
    // this.productService.getProduct('ruby-on-rails-tote')
    // .subscribe(response => {
    //   this.product = response;
    // });
  }
}
