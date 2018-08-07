import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  selectedProfileMenu: any;

  profileOption = [
    { name: 'My Profile', url: '/user/profile' },
    { name: 'My Orders', url: '/user/orders' },
    { name: 'My Address', url: '/user/addresses' },
    { name: 'My Favorite Products', url: '/user/favorite-products' }
  ]
  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showSelectedMenu(event.url);
      }
    });
  }

  ngOnInit() {
  }

  showSelectedMenu(url) {
    this.selectedProfileMenu = this.profileOption.find(element =>
      element.url.includes(url))
  }
}
