// import { SearchActions } from './../reducers/search.actions';
// import { Store } from '@ngrx/store';
// import { AppState } from './../../interfaces';
// import { Product } from './../../core/models/product';
// import { Observable } from 'rxjs/Observable';
// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { HttpParams } from '@angular/common/http';
// import { of } from 'rxjs';

// @Injectable()
// export class SearchResolver implements Resolve<Array<Product>> {

//   constructor(
//     private store: Store<AppState>,
//     private searchActions: SearchActions,
//   ) { }

//   resolve(route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<Array<Product>> {
//     const queryParams = route.queryParams;

//     if ('q[name_cont_any]' in queryParams && 'page' in queryParams) {
//       this.onSearch(queryParams['q[name_cont_any]'], queryParams);
//     } else if ('q[name_cont_any]' in queryParams) {
//       this.onSearch(queryParams['q[name_cont_any]'], queryParams);
//     }

//     if ('id' in queryParams && 'page' in queryParams) {
//       this.catgeoryFilter(queryParams);
//     } else if ('id' in queryParams && 'q[s]' in queryParams) {
//       this.catgeoryFilter(queryParams);
//     } else if ('id' in queryParams) {
//       this.catgeoryFilter(queryParams);
//     }

//     if ('q[s]' in queryParams && 'q[name_cont_any]' in queryParams) {
//       this.onSearch(queryParams['q[name_cont_any]'], queryParams);
//     }
//     return of([]);
//   }

//   catgeoryFilter(queryParams) {
//     let search = new HttpParams()
//       .set('id', queryParams.id)
//       .set('page', queryParams.page);
//     if ('q[s]' in queryParams) {
//       search = search.set('q[s]', queryParams['q[s]']);
//     }
//     this.store.dispatch(this.searchActions.getProductsByTaxon(search.toString()));
//   }

//   onSearch(keyword, queryParams) {
//     if (keyword !== '') {
//       keyword = keyword.trim();
//       let search = new HttpParams()
//         .set('q[name_cont_any]', keyword);

//       if ('page' in queryParams) {
//         search = search.set('page', queryParams.page);
//       }
//       if ('q[s]' in queryParams) {
//         search = search.set('q[s]', queryParams['q[s]']);
//       }
//       this.store.dispatch(this.searchActions.getproductsByKeyword(search.toString()));
//       this.store.dispatch(this.searchActions.clearCategeoryLevel());
//     }
//   }
// }
