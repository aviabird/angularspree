import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-checkout-header',
  templateUrl: './checkout-header.component.html',
  styleUrls: ['./checkout-header.component.scss']
})
export class CheckoutHeaderComponent implements OnInit {

  private currentStep: string;
  private checkoutStep = ['cart', 'address', 'payment'];
  constructor(private router: Router) {
    router.events
      .filter((e) => e instanceof NavigationStart)
      .subscribe((e: NavigationStart) => {
        const route = e.url;
        this.findCurrentStep(route);
      });
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

  private findCurrentStep(currentRoute) {
    this.currentStep = currentRoute.split('/')[2];
  }

}
