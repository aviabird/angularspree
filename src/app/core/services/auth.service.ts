import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class AuthService {
  private apiLink: string = environment.API_ENDPOINT; // "http://localhost:3000";
  
  constructor(
    private http: Http
  ) {

  }

  // returns an observable with user object
  login(data): Observable<Object> {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(
      `${this.apiLink}/spree/login.json`,
      JSON.stringify(data),
      { headers: headers} 
    ).map((res: Response) => {
      // Setting token after login
      this.setTokenInLocalStorage(res.json())
      return res.json();
    }).catch((res: Response) => this.catchError(res));
    // catch should be handled here with the http observable 
    // so that only the inner obs dies and not the effect Observable
    // otherwise no further login requests will be fired
    // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
  }
  
  private setTokenInLocalStorage(user_data): void {
    let jsonData = JSON.stringify(user_data)
    localStorage.setItem('user', jsonData);
  }

  private catchError(response: Response): Observable<String> {
    console.log('in catch error method');
    // not returning throw as it raises an error on the parent observable 
    // MORE INFO at https://youtu.be/3LKMwkuK0ZE?t=24m29s    
    return Observable.of('server error');
  }
}
