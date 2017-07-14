import { Subject } from 'rxjs/Subject';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../../core/services/http';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {
  loading$: Subject<{loading: boolean, hasError: boolean, hasMsg: string}>;

  constructor(private httpInterceptor: HttpService) {
    this.loading$ = this.httpInterceptor.loading;
  }

  ngOnInit() {
  }

}
