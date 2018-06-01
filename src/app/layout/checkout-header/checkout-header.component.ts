import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-checkout-header',
  templateUrl: './checkout-header.component.html',
  styleUrls: ['./checkout-header.component.scss']
})
export class CheckoutHeaderComponent implements OnInit {

  @Input() currentStep: string;
  private checkoutStep = ['cart', 'address', 'payment'];
  public headerConfig = environment.config.header;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  isActiveRoute(step) {
    if (!this.currentStep) {
      return false;
    }
    if (step === this.currentStep) {
      return true;
    } else {
      return false;
    }
  }

  checkIfClickable(clickStep) {
    return this.isLinkAccessible(clickStep);
  }

  getRouterLink(step) {
    const isAccessible = this.isLinkAccessible(step);
    let link = [];
    if (isAccessible) {
      link = ['/checkout', step];
    }
    return link;
  }

  isLinkAccessible(step) {
    if (!this.currentStep) {
      return false;
    }
    const currentStepIndex = this.checkoutStep.indexOf(this.currentStep);
    const stepIndex = this.checkoutStep.indexOf(step);

    if (stepIndex <= currentStepIndex) {
      return true;
    } else {
      return false;
    }
  }

}
