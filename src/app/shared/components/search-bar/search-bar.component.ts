import { Router } from '@angular/router';
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

  constructor(private http: HttpClient, private router: Router) {
    this.dataSource = Observable.create((observer: any) => {
      observer.next(this.asyncSelected);
    }).pipe(mergeMap((token: string) => this.getStatesAsObservable(token)));
  }

  getStatesAsObservable(token: string): Observable<any> {
    return this.http
      .get<{ data: any }>('api/v1/products/suggest', {
        params: {
          q: token
        }
      })
      .pipe(
        map(resp =>
          resp.data.map(
            (item: { name: string; category: string; term: string }) => {
              item.name = `${item.term} in ${item.category}`;
              return item;
            }
          )
        )
      );
  }

  changeTypeaheadLoading(e: boolean): void {
    this.typeaheadLoading = e;
  }

  typeaheadOnSelect(e: TypeaheadMatch): void {
    this.doSearch(e.value);
  }

  doSearch(keyword: string) {
    if (keyword !== '') {
      const [q, category] = keyword.trim().split(' in ');
      this.router.navigate(['/s'], {
        queryParams: {
          q: q,
          f: `Category:${category || ''}`
        }
      });
    }
  }
}
