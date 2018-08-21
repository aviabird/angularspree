import { of as observableOf, Observable, throwError, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { AppState } from '../../interfaces';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../auth/actions/auth.actions';
import { AuthService as OauthService } from 'ng2-ui-auth';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Authenticate, User } from '../models/user';
import { HttpRequest } from '@angular/common/http/src/request';
import { ToastrService, ActiveToast } from 'ngx-toastr';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class AuthService {
  /**
   * Creates an instance of AuthService.
   * @param {HttpService} http
   * @param {AuthActions} actions
   * @param {Store<AppState>} store
   *
   * @memberof AuthService
   */
  constructor(
    private http: HttpClient,
    private actions: AuthActions,
    private store: Store<AppState>,
    private oAuthService: OauthService,
    private toastrService: ToastrService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  /**
   *
   *
   * @param {Authenticate} { email, password }
   * @returns {Observable<User>}
   * @memberof AuthService
   */
  login({ email, password }: Authenticate): Observable<User> {
    const params = { spree_user: { email, password } };
    return this.http.post<User>('login.json', params).pipe(
      map(user => {
        this.setTokenInLocalStorage(user);
        this.store.dispatch(this.actions.loginSuccess());
        return user;
      }),
      tap(
        _ => this.router.navigate(['/']),
        user => this.toastrService.error(user.error.error, 'ERROR!')
      )
    );
    // catch should be handled here with the http observable
    // so that only the inner obs dies and not the effect Observable
    // otherwise no further login requests will be fired
    // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
  }

  /**
   *
   *
   * @param {User} data
   * @returns {Observable<User>}
   *
   * @memberof AuthService
   */
  register(data: User): Observable<User> {
    const params = { spree_user: data };
    return this.http.post<User>('auth/accounts', params).pipe(
      map(user => {
        this.setTokenInLocalStorage(user);
        this.store.dispatch(this.actions.loginSuccess());
        return user;
      }),
      tap(
        _ => _,
        _ => this.toastrService.error('Invalid/Existing data', 'ERROR!!')
      )
    );
    // catch should be handled here with the http observable
    // so that only the inner obs dies and not the effect Observable
    // otherwise no further login requests will be fired
    // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
  }

  /**
   *
   *
   * @param {anyUser} data
   * @returns {Observable<any>}
   * @memberof AuthService
   */
  forgetPassword(data: User): Observable<any> {
    return this.http.post('auth/passwords', { spree_user: data }).pipe(
      map(_ =>
        this.toastrService.success(
          'Password reset link has be sent to your email.',
          'Success'
        )
      ),
      tap(
        _ => _,
        _ => this.toastrService.error('Not a valid email/user', 'ERROR!!')
      )
    );
  }

  /**
   *
   *
   * @param {User} data
   * @returns {Observable<any>}
   * @memberof AuthService
   */
  updatePassword(data: User): Observable<void | ActiveToast<any>> {
    return this.http
      .put(`auth/passwords/${data.id}`, { spree_user: data })
      .pipe(
        map(_ =>
          this.toastrService.success(
            'Password updated success fully!',
            'Success'
          )
        ),
        tap(
          _ => _,
          _ => this.toastrService.error('Unable to update password', 'ERROR!')
        )
      );
  }

  /**
   *
   *
   * @returns {Observable<any>}
   *
   * @memberof AuthService
   */
  authorized(): Observable<any> {
    return this.http
      .get('auth/authenticated')
      .pipe(catchError(error => of(error.error)));
  }

  /**
   *
   *
   * @returns
   *
   * @memberof AuthService
   */
  logout() {
    return this.http.get('logout.json').pipe(
      map((res: Response) => {
        // Setting token after login
        if (isPlatformBrowser(this.platformId)) {
          localStorage.removeItem('user');
        }
        this.store.dispatch(this.actions.logoutSuccess());
        return res;
      })
    );
  }

  /**
   *
   *
   * @returns {{}}
   * @memberof AuthService
   */
  getTokenHeader(request: HttpRequest<any>): HttpHeaders {
    const userJson = isPlatformBrowser(this.platformId) ? localStorage.getItem('user') : '{}';

    const user: User =
      ['undefined', null].indexOf(userJson) === -1
        ? JSON.parse(userJson)
        : {};

    return new HttpHeaders({
      'Content-Type': request.headers.get('Content-Type') || 'application/json',
      'token-type': 'Bearer',
      access_token: user.access_token || [],
      client: user.client || [],
      uid: user.uid || [],
      'Auth-Token': user.spree_api_key || [],
      'ng-api': 'true'
    });
  }

  /**
   *
   *
   * @private
   * @param {any} user_data
   *
   * @memberof AuthService
   */
  private setTokenInLocalStorage(user_data: any): void {
    const jsonData = JSON.stringify(user_data);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('user', jsonData);
    }
  }

  socialLogin(provider: string) {
    return this.oAuthService.authenticate<User>(provider).pipe(
      map(user => {
        this.setTokenInLocalStorage(user);
        return user;
      }),
      catchError(_ => {
        this.toastrService.error('Social login failed', 'ERROR!');
        return observableOf('Social login failed');
      })
    );
  }
}
