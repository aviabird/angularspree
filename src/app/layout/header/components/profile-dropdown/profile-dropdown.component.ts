import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { User } from '../../../../core/models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileDropdownComponent implements OnInit, OnChanges, OnDestroy {
  @Input() isAuthenticated;
  name: string;
  @Input() isMobile;
  currentUser: User;
  subnav: boolean;
  isOpen: boolean;
  subList$: Array<Subscription> = [];
  isScrolled: false;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any) {
  }

  ngOnInit() {
  }

  onOpenChange(data: boolean): void {
    this.isOpen = !this.isOpen;
  }

  ngOnChanges() {
    this.currentUser = isPlatformBrowser(this.platformId) ? JSON.parse(localStorage.getItem('user')) : null;
    if (this.currentUser) {
      this.name = this.currentUser.first_name;
    }
  }

  logout() {
    this.subnav = !this.subnav;
    this.subList$.push(this.authService.logout().
      subscribe(_ => this.router.navigate(['auth', 'login'])));
  }

  login() {
    this.router.navigate(['/auth/login'])
  }

  ngOnDestroy() {
    this.subList$.map(sub$ => sub$.unsubscribe());
  }
}
