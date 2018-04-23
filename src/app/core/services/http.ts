// Now provided by http client

// /**
//  * Http Intercepter Service
//  * TODO: Add Loader and Toasty Service currently using console log
//  * for showing errors and response and request completion;
//  */
// import { Injectable } from '@angular/core';
// import {
//   Http,
//   ConnectionBackend,
//   RequestOptions,
//   RequestOptionsArgs,
//   Response,
//   Headers,
//   Request
// } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import { environment } from './../../../environments/environment';
// import { Subject } from 'rxjs/Subject';

// @Injectable()
// export class HttpService extends Http {
//   public loading = new Subject<{loading: boolean, hasError: boolean, hasMsg: string}>();

//   constructor(
//     backend: ConnectionBackend,
//     defaultOptions: RequestOptions,
//   ) {
//     super(backend, defaultOptions);
//   }

//   /**
//    * Performs any type of http request.
//    * @param url
//    * @param options
//    * @returns {Observable<Response>}
//    */
//   request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
//     return super.request(url, options);
//   }

//   /**
//    * Performs a request with `get` http method.
//    * @param url
//    * @param options
//    * @returns {Observable<>}
//    */
//   get(url: string, options?: RequestOptionsArgs): Observable<any> {
//     this.requestInterceptor();
//     return super.get(this.getFullUrl(url), this.requestOptions(options))
//       .catch(this.onCatch.bind(this))
//       .do((res: Response) => {
//         this.onSubscribeSuccess(res);
//       }, (error: any) => {
//         this.onSubscribeError(error);
//       })
//       .finally(() => {
//         this.onFinally();
//       });
//   }

//   getLocal(url: string, options?: RequestOptionsArgs): Observable<any> {
//     return super.get(url, options);
//   }

//   /**
//    * Performs a request with `post` http method.
//    * @param url
//    * @param body
//    * @param options
//    * @returns {Observable<>}
//    */
//   post(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
//     this.requestInterceptor();
//     return super.post(this.getFullUrl(url), body, this.requestOptions(options))
//       .catch(this.onCatch.bind(this))
//       .do((res: Response) => {
//         this.onSubscribeSuccess(res);
//       }, (error: any) => {
//         this.onSubscribeError(error);
//       })
//       .finally(() => {
//         this.onFinally();
//       });
//   }

//   /**
//    * Performs a request with `put` http method.
//    * @param url
//    * @param body
//    * @param options
//    * @returns {Observable<>}
//    */
//   put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
//     this.requestInterceptor();
//     return super.put(this.getFullUrl(url), body, this.requestOptions(options))
//       .catch(this.onCatch.bind(this))
//       .do((res: Response) => {
//         this.onSubscribeSuccess(res);
//       }, (error: any) => {
//         this.onSubscribeError(error);
//       })
//       .finally(() => {
//         this.onFinally();
//       });
//   }

//   /**
//    * Performs a request with `delete` http method.
//    * @param url
//    * @param options
//    * @returns {Observable<>}
//    */
//   delete(url: string, options?: RequestOptionsArgs): Observable<any> {
//     this.requestInterceptor();
//     return super.delete(this.getFullUrl(url), this.requestOptions(options))
//       .catch(this.onCatch.bind(this))
//       .do((res: Response) => {
//         this.onSubscribeSuccess(res);
//       }, (error: any) => {
//         this.onSubscribeError(error);
//       })
//       .finally(() => {
//         this.onFinally();
//       });
//   }


//   /**
//    * Request options.
//    * @param options
//    * @returns {RequestOptionsArgs}
//    */
//   private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
//     if (options == null) {
//       options = new RequestOptions();
//     }

//     if (options.headers == null) {
//       const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;
//       options.headers = new Headers({
//         'Content-Type': 'application/json',
//         'X-Spree-Token': user && user.spree_api_key
//       });
//     }
//     return options;
//   }

//   /**
//    * Build API url.
//    * @param url
//    * @returns {string}
//    */
//   private getFullUrl(url: string): string {
//     return environment.apiEndpoint + url;
//   }

//   /**
//    * Request interceptor.
//    */
//   private requestInterceptor(): void {
//     console.log('Sending Request');
//     // this.loaderService.showPreloader();
//     this.loading.next({
//       loading: true, hasError: false, hasMsg: ''
//     });
//   }

//   /**
//    * Response interceptor.
//    */
//   private responseInterceptor(): void {
//     console.log('Request Complete');
//     // this.loaderService.hidePreloader();
//   }

//   /**
//    * Error handler.
//    * @param error
//    * @param caught
//    * @returns {ErrorObservable}
//    */
//   private onCatch(error: any, caught: Observable<any>): Observable<any> {
//     console.log('Something went terrible wrong and error is', error);
//     // this.loaderService.popError();
//     return Observable.of(error);
//   }

//   /**
//    * onSubscribeSuccess
//    * @param res
//    */
//   private onSubscribeSuccess(res: Response): void {
//     this.loading.next({
//       loading: false, hasError: false, hasMsg: ''
//     });
//   }

//   /**
//    * onSubscribeError
//    * @param error
//    */
//   private onSubscribeError(error: any): void {
//     console.log('Something Went wrong while subscribing', error);
//     // this.loaderService.popError();
//     this.loading.next({
//       loading: false, hasError: true, hasMsg: 'Something went wrong'
//     });
//   }

//   /**
//    * onFinally
//    */
//   private onFinally(): void {
//     this.responseInterceptor();
//   }
// }
