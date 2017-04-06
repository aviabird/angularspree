import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { HttpService } from '../../../core/services/http';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {
  loading: any;
  notiSubs: Subscription;

  constructor(private httpInterceptor: HttpService) {
    this.notiSubs = this.httpInterceptor.loading.subscribe(
      data => this.loading = data
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // this.notiSubs.unsubscribe();
  }

}
