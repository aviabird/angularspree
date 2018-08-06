import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, Inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileDropdownComponent implements OnInit, OnChanges {
  @Input() isAuthenticated;
  email = '';
  @Input() isMobile;
  currentUser: any;
  subnav: boolean;
  isOpen: boolean;

  constructor(private authService: AuthService, private router: Router, @Inject(PLATFORM_ID) private platformId: any) {
  }

  ngOnInit() {
  }
  onOpenChange(data: boolean): void {
    this.isOpen = !this.isOpen;
  }
  ngOnChanges() {
    this.currentUser = isPlatformBrowser(this.platformId) ? JSON.parse(localStorage.getItem('user')) : null;
    if (this.currentUser) {
      this.email = this.currentUser.email.split('@')[0];
    }
  }

  logout() {

    this.subnav = !this.subnav;
    this.authService.logout().
      subscribe(res => {
        this.router.navigate(['auth', 'login']);
      });
  }

  login() {
    this.router.navigate(['/auth/login'])
  }

}
