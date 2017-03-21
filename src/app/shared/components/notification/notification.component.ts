import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpService } from '../../../core/services/http';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  loading$: Observable<{loading: false, error: false}>;

  constructor(private httpInterceptor: HttpService) {
    this.loading$ = this.httpInterceptor.loading;
  }

  ngOnInit() {
  }

}
