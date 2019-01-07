import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TypeaheadMatch } from 'ngx-bootstrap';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  asyncSelected: string;
  typeaheadLoading: boolean;
  typeaheadNoResults: boolean;
  dataSource: Observable<any>;
  statesComplex: any[] = [];
  searchPlaceholder = environment.config.header.searchPlaceholder;

  constructor(private http: HttpClient) {
    this.dataSource = Observable.create((observer: any) => {
      // Runs on every search
      observer.next(this.asyncSelected);
    })
      .pipe(
        mergeMap((token: string) => this.getStatesAsObservable(token))
      );
  }

  getStatesAsObservable(token: string): Observable<any> {
    const query = new RegExp(token, 'i');

    return this.http.get<{ data: any }>('api/v1/products/suggest', {
      params: {
        q: token
      }
    }).pipe(map(resp => resp.data.filter((state: any) => {
      return query.test(state.name);
    })))
  }

  changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    console.log('Selected value: ', e.value);
  }

}
