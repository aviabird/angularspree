import { Component, OnInit, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { CheckoutService } from '../../../../core/services/checkout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderCartComponent implements OnInit, OnDestroy {
  @Input() totalCartItems: number;
  @Input() isMobile;
  subscriptionList$: Array<Subscription> = [];

  constructor(private checkOutService: CheckoutService) { }

  ngOnInit() {}

  getCurrentOrder() {
    this.subscriptionList$.push(
      this.checkOutService.fetchCurrentOrder().subscribe()
    );
  }

  ngOnDestroy() {
    this.subscriptionList$.forEach(sub$ => sub$.unsubscribe());
  }

}
