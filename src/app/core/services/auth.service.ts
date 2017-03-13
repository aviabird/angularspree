import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';
import { Response } from '@angular/http';
import { HttpService } from './http';
import { AppState } from '../../interfaces';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../auth/actions/auth.actions';

@Injectable()
export class AuthService {
  private apiLink: string = environment.API_ENDPOINT; // "http://localhost:3000";

  constructor(
    private http: HttpService,
    private actions: AuthActions,
    private store: Store<AppState>
  ) {

  }

  // returns an observable with user object
  login(data): Observable<Object> {
    return this.http.post(
      'spree/login.json',
      { spree_user: data }
    ).map((res: Response) => {
      // Setting token after login
      this.setTokenInLocalStorage(res.json());
      this.store.dispatch(this.actions.loginSuccess());
      return res.json();
    }).catch((res: Response) => this.catchError(res));
    // catch should be handled here with the http observable
    // so that only the inner obs dies and not the effect Observable
    // otherwise no further login requests will be fired
    // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
  }

  // returns an observable
  logout() {
    return this.http.get('spree/logout.json')
      .map((res: Response) => {
        // Setting token after login
        localStorage.removeItem('user');
        this.store.dispatch(this.actions.logoutSuccess());
        return res.json();
      }).catch((res: Response) => this.catchError(res));
  }

  private setTokenInLocalStorage(user_data): void {
    const jsonData = JSON.stringify(user_data);
    localStorage.setItem('user', jsonData);
  }

  private catchError(response: Response): Observable<String> {
    console.log('in catch error method');
    // not returning throw as it raises an error on the parent observable
    // MORE INFO at https://youtu.be/3LKMwkuK0ZE?t=24m29s
    return Observable.of('server error');
  }
}
