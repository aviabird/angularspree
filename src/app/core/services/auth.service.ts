import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../interfaces';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../auth/actions/auth.actions';
import { AuthService as OauthService } from 'ng2-ui-auth';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Authenticate, User } from '../models/user';
import { ToastyService } from 'ng2-toasty';

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
    private toastyService: ToastyService
  ) {

  }

  login({ email, password }: Authenticate): Observable<any> {
    const params = { spree_user: { email, password } };
    return (
      this.http.post<User>('spree/login.json', params)
      .map(user => {
        this.setTokenInLocalStorage(user);
        this.store.dispatch(this.actions.loginSuccess());
        return user;
      })
      .do(_ => _, user => this.toastyService.error({
        title: 'ERROR!!', msg: user.error.error
      }))
    )
    // catch should be handled here with the http observable
    // so that only the inner obs dies and not the effect Observable
    // otherwise no further login requests will be fired
    // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
  }

  /**
   *
   *
   * @param {any} data
   * @returns {Observable<any>}
   *
   * @memberof AuthService
   */
  register(data: User): Observable<any> {
    const params = { spree_user: data };
    return (
      this.http.post<User>('api/account', params)
      .map((user) => {
        this.setTokenInLocalStorage(user);
        this.store.dispatch(this.actions.loginSuccess());
        return user;
      })
      .do(_ => _, _ => this.toastyService.error({
        title: 'ERROR!!', msg: 'Invalid/Existing data'
      }))
    )
    // catch should be handled here with the http observable
    // so that only the inner obs dies and not the effect Observable
    // otherwise no further login requests will be fired
    // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
  }



  forgetPassword(data): Observable<any> {
    return this.http.post(
      'api/passwords/#{data.id}',
      { spree_user: data }
    ).map((res: Response) => {
      data = res.json();
      if (!data.errors) {
        this.store.dispatch(this.actions.forgetPasswordSuccess());
      } else {
        this.http.loading.next({
          loading: false,
          hasError: true,
          hasMsg: 'enter valid email'
        });
      }
      return res.json();
    });
  }

  updatePassword(data): Observable<any> {
    console.log(data)
    return this.http.put(
      'api/passwords',
      { spree_user: data }
    ).map((res: Response) => {
      res.json();
    });
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
      .get('spree/api/v1/users')
      .map((res: Response) => res);
    // catch should be handled here with the http observable
    // so that only the inner obs dies and not the effect Observable
    // otherwise no further login requests will be fired
    // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
  }

  /**
   *
   *
   * @returns
   *
   * @memberof AuthService
   */
  logout() {
    return this.http.get('spree/logout.json')
      .map((res: Response) => {
        // Setting token after login
        localStorage.removeItem('user');
        this.store.dispatch(this.actions.logoutSuccess());
        return res.json();
      });
  }

  /**
   *
   *
   * @returns {{}}
   * @memberof AuthService
   */
  getTokenHeader(): HttpHeaders {
    const user = ['undefined', null]
      .indexOf(localStorage.getItem('user')) === -1 ?
      JSON.parse(localStorage.getItem('user')) : {};

    return new HttpHeaders({
      'Content-Type': 'application/json',
      'token-type': 'Bearer',
      'access_token': user.access_token || [],
      'client': user.client || [],
      'uid': user.uid || []
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
  private setTokenInLocalStorage(user_data): void {
    const jsonData = JSON.stringify(user_data);
    localStorage.setItem('user', jsonData);
  }

  socialLogin(provider: string) {
    return this.oAuthService.authenticate(provider).map((res: Response) => {
      this.setTokenInLocalStorage(res);
      return res;
    }).catch((res: Response) => {
      // this.http.loading.next({
      //   loading: false,
      //   hasError: true,
      //   hasMsg: `Could not login with ${provider}. Error: ${res}`
      // });
      return Observable.of('Social login failed');
    });
  }
}
