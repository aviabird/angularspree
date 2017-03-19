import { CheckoutService } from './core/services/checkout.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private router: Router, private checkoutService: CheckoutService) {
    router
      .events
      .filter(e => e instanceof NavigationEnd)
      .subscribe(() => {
        window.scrollTo(0, 0);
      });
  }

  ngOnInit() {
    this.checkoutService.fetchCurrentOrder()
      .subscribe();
  }

}
