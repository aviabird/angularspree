import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpService } from '../../../core/services/http';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {
  loading$: Observable<boolean>;

  constructor(private httpInterceptor: HttpService) {
    this.loading$ = this.httpInterceptor.loading;
  }

  ngOnInit() {
  }

}
