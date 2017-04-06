import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../../core/services/http';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {
  loading$: Observable<{loading: false, error: false}>;

  constructor(private httpInterceptor: HttpService) {
    this.loading$ = this.httpInterceptor.loading;
  }

  ngOnInit() {
  }

}
